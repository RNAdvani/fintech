import { ErrorHandler } from "../lib/ErrorHandler";
import { TryCatch } from "../lib/TryCatch";
import { CategoryModel, LessonModel, QuizModel, UserModel } from "../schemas";

export const getLessonContent = TryCatch(async(req,res,next)=>{
  const { clerkId, lessonId } = req.body;

  // Find the lesson by ID and populate the 'quiz' and 'category' fields
  const lesson = await LessonModel.findById(lessonId)
    .select('title content lessonNumber category quiz')

  if (!lesson) {
    return res.status(404).json({ success: false, message: 'Lesson not found' });
  }

  const quiz = await QuizModel.findById(lesson.quiz).populate('questions');

  if (!lesson) {
    return res.status(404).json({ success: false, message: 'Lesson not found' });
  }

  // Find the user by their Clerk ID
  // Check user's progress for the given category

  // Send the complete lesson data including the populated fields
  return res.status(200).json({
    success: true,
    data: {
      lessonTitle: lesson.title,
      lessonContent: lesson.content,
      lessonNumber: lesson.lessonNumber,
      category: lesson.category, // Include the populated category details
      quiz: quiz, // Include the populated quiz details
    },
    message: 'Lesson retrieved successfully',
  });
})

export const getQuizForLesson = TryCatch(async(req,res,next)=>{
  const { clerkId , lessonId } = req.body; // Assuming authentication middleware

  const lesson = await LessonModel.findById(lessonId).populate('quiz');
  if (!lesson) {
    return next(new ErrorHandler(404, 'Lesson not found'));
  }

  const user = await UserModel.findOne({ clerkId });
  if (!user) {
    return next(new ErrorHandler(404, 'User not found'));
  }

  const userProgress = user.progress.get(lesson.category.toString()) || { lessonsCompleted: [], quizResults: [] };
  
  if (userProgress.quizResults.some(result => result.quizId.toString() === (lesson?.quiz?.id))) {
    return next( new ErrorHandler(400, 'Quiz already taken'));
  }

  const quizQuestions = await QuizModel.findById(lesson.quiz)
    .select('questions')
    .populate('questions', 'questionText options._id options.optionText');

  if (!quizQuestions) {
    return next(new ErrorHandler(404, 'Quiz not found'));
  }

  res.json({
    success:true,
    data:{
      quizId: lesson.quiz.id,
      questions: quizQuestions.questions.map(q => ({
        questionId: q._id,
        questionText: q.questionText,
        options: q.options.map(o => ({ optionId: o._id ,optionText: o.optionText }))
      }))
    },
    message : 'Quiz retrieved successfully'
  }).status(200);
})

export const submitQuiz = TryCatch(async (req, res, next) => {
  const { answers, quizId, clerkId } = req.body;
  console.log({ answers, quizId, clerkId });

  const quiz = await QuizModel.findById(quizId).populate('questions');
  if (!quiz) {
    return res.status(404).json({ message: 'Quiz not found' });
  }

  const user = await UserModel.findOne({ clerkId });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const lesson = await LessonModel.findOne({ quiz: quizId });
  if (!lesson) {
    return next(new ErrorHandler(404, 'Lesson not found'));
  }

  const categoryId = lesson.category.toString();

  const isProgress  = !!user.progress

  // Initialize progress if it doesn't exist
  if (!isProgress) {
    user.progress = new Map();
  }

  // Get or initialize the user's progress for this category
  let categoryProgress = user.progress.get(categoryId);
  if (!categoryProgress) {
    categoryProgress = { lessonsCompleted: [], quizResults: [], megaQuizCompleted: false };
  }


  console.log({ categoryProgress });
  console.log({user});

  // Calculate quiz score
  let score = 0;


  console.log({answers,questions:quiz.questions});

  quiz.questions.forEach((question, index) => {
    if (index < answers.length) {
      const userAnswer = answers[index];
      const correctAnswer = question.options.find(o => o.isCorrect);
      if (correctAnswer && userAnswer === correctAnswer._id.toString()) {
        score++;
      }
    }
  });

  // Update quiz results in user's progress
  categoryProgress.quizResults.push({
    quizId: quiz._id.toString(),
    score,
    completedAt: new Date()
  });

  // Mark lesson as completed if not already present
  if (!categoryProgress.lessonsCompleted.includes(lesson._id.toString())) {
    categoryProgress.lessonsCompleted.push(lesson._id.toString());
  }

  console.log({categoryId,categoryProgress});
  // Save updated progress to the user document

  const category  = categoryId

  user.progress.set(categoryId, categoryProgress);

  // Update user credits based on score
  if (score <= 3) {
    user.credits += 1;
  } else if (score > 3 && score <= 7) {
    user.credits += 2;
  } else {
    user.credits += 3;
  }

  console.log({user});

  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    data: {
      score,
      totalQuestions: quiz.questions.length,
      lessonCompleted: true
    },
    message: 'Quiz submitted successfully'
  });
});