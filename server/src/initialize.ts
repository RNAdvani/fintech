import mongoose from 'mongoose';
import { CategoryModel, LessonModel, QuizModel, QuestionModel, Category, Lesson, Quiz, Question } from './schemas';
import { connectDb } from './lib/db';

const categories = ['Investment', 'Saving', 'Earning', 'Retiring'] as const;
type CategoryName = typeof categories[number];
const lessonsPerCategory = 10;
const questionsPerQuiz = 5;

async function initializeDatabase(): Promise<void> {
  await createCategories();
  await createLessonsAndQuizzes();
  await createMegaQuizzes();
  
}

async function createCategories(): Promise<void> {
  for (const categoryName of categories) {
    await CategoryModel.create({
      name: categoryName,
      description: `Learn about ${categoryName.toLowerCase()} strategies and techniques.`,
      lessons: [],
      megaQuiz: null
    });
  }
  console.log('Categories created');
}

async function createLessonsAndQuizzes(): Promise<void> {
  for (const categoryName of categories) {
    const category = await CategoryModel.findOne({ name: categoryName });
    if (!category) {
      console.error(`Category ${categoryName} not found`);
      continue;
    }
    
    for (let i = 1; i <= lessonsPerCategory; i++) {
      const lesson = await LessonModel.create({
        category: category._id,
        title: `${categoryName} Lesson ${i}`,
        content: getYoutubeEmbedLink(categoryName, i),
        orderInCategory: i,
        quiz: null
      });
      
      if(!lesson) {
        console.error(`Failed to create lesson for ${categoryName}`);
        continue;
      }

      const quiz = await createQuiz(lesson?._id as any, category._id as mongoose.Types.ObjectId, false, categoryName);
      if (quiz) {
        (lesson as any).quiz = quiz._id;
        await lesson.save();
        
        category.lessons.push(lesson?._id! as string);
      }
    }
    await category.save();
  }
  console.log('Lessons and quizzes created');
}

async function createMegaQuizzes(): Promise<void> {
  for (const categoryName of categories) {
    const category = await CategoryModel.findOne({ name: categoryName });
    if (!category) {
      console.error(`Category ${categoryName} not found`);
      continue;
    }
    const megaQuiz = await createQuiz(null, category._id as mongoose.Types.ObjectId, true, categoryName);
    if (megaQuiz) {
      (category as any).megaQuiz = megaQuiz._id;
      await category.save();
    }
  }
  console.log('Mega quizzes created');
}

async function createQuiz(lessonId: mongoose.Types.ObjectId | null, categoryId: mongoose.Types.ObjectId, isMegaQuiz: boolean, categoryName: CategoryName): Promise<Quiz | null> {
  const quiz = await QuizModel.create({
    lesson: lessonId,
    category: categoryId,
    questions: [],
    isMegaQuiz
  });

  const numQuestions = isMegaQuiz ? questionsPerQuiz * 2 : questionsPerQuiz;
  
  for (let i = 0; i < numQuestions; i++) {
    const question = await createQuestion(categoryName);
    if (question) {
      quiz.questions.push(question._id as any);
    }
  }
  
  await quiz.save();
  return quiz;
}

async function createQuestion(categoryName: CategoryName): Promise<Question | null> {
  const questionData = getQuestionData(categoryName);
  const correctOptionIndex = Math.floor(Math.random() * 4);
  const options = questionData.options.map((optionText, index) => ({
    optionText,
    isCorrect: index === correctOptionIndex
  }));

  return await QuestionModel.create({
    questionText: questionData.questionText,
    options
  });
}

function getQuestionData(categoryName: CategoryName): { questionText: string, options: string[] } {
  const questions = {
    Investment: [
      {
        questionText: "What is diversification in investing?",
        options: [
          "Putting all your money in one stock",
          "Spreading investments across various assets",
          "Only investing in bonds",
          "Investing in a single industry"
        ]
      },
      {
        questionText: "What does P/E ratio stand for in stock valuation?",
        options: [
          "Price to Earnings",
          "Profit to Expense",
          "Potential to Expand",
          "Performance to Expectation"
        ]
      }
    ],
    Saving: [
      {
        questionText: "What is the purpose of an emergency fund?",
        options: [
          "To save for vacation",
          "To cover unexpected expenses",
          "To invest in stocks",
          "To pay regular bills"
        ]
      },
      {
        questionText: "Which savings account typically offers the highest interest rate?",
        options: [
          "Standard savings account",
          "Money market account",
          "High-yield savings account",
          "Checking account"
        ]
      }
    ],
    Earning: [
      {
        questionText: "What is passive income?",
        options: [
          "Income from a full-time job",
          "Money earned without active involvement",
          "Overtime pay",
          "Income from a part-time job"
        ]
      },
      {
        questionText: "Which of these is NOT typically considered a way to increase your earning potential?",
        options: [
          "Getting additional education",
          "Networking",
          "Developing new skills",
          "Avoiding all financial risks"
        ]
      }
    ],
    Retiring: [
      {
        questionText: "What is a 401(k)?",
        options: [
          "A type of loan",
          "A retirement savings plan",
          "A stock market index",
          "A government bond"
        ]
      },
      {
        questionText: "What does IRA stand for in retirement planning?",
        options: [
          "International Retirement Account",
          "Individual Retirement Arrangement",
          "Internal Revenue Assessment",
          "Immediate Retirement Access"
        ]
      }
    ]
  };

  const categoryQuestions = questions[categoryName];
  return categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
}

function getYoutubeEmbedLink(categoryName: CategoryName, lessonNumber: number): string {
  const links = {
    Investment: [
      "https://www.youtube.com/embed/f5j9v9dfinQ",
      "https://www.youtube.com/embed/Aw21dFI8SL0",
      "https://www.youtube.com/embed/gtWMvtYuVhI",
      "https://www.youtube.com/embed/KfDB9e_cO4k",
      "https://www.youtube.com/embed/CUPnZfKCn1k",
      "https://www.youtube.com/embed/3QKmQCyj_Zc",
      "https://www.youtube.com/embed/qgVg4hv10YM",
      "https://www.youtube.com/embed/HzIXqwALkp0",
      "https://www.youtube.com/embed/_xN4F9qLUbw",
      "https://www.youtube.com/embed/dq_6B5_yRbw"
    ],
    Saving: [
      "https://www.youtube.com/embed/kKCxL2rH3Oc",
      "https://www.youtube.com/embed/OiHsPgz5BBU",
      "https://www.youtube.com/embed/jO9LTCVGpnY",
      "https://www.youtube.com/embed/N-C_r4B_-ZE",
      "https://www.youtube.com/embed/4XC3nmZZwK8",
      "https://www.youtube.com/embed/Mq_JZhD6KWY",
      "https://www.youtube.com/embed/Y4UeVFbRTf0",
      "https://www.youtube.com/embed/w__SZl8YyPY",
      "https://www.youtube.com/embed/ysNQxfNJ7Wk",
      "https://www.youtube.com/embed/U9OOOJzKyqw"
    ],
    Earning: [
      "https://www.youtube.com/embed/fzfZ0kB-N3I",
      "https://www.youtube.com/embed/8nRqYG3VWtk",
      "https://www.youtube.com/embed/erQ6CjOq9Vs",
      "https://www.youtube.com/embed/6Vt2SwD5l8Y",
      "https://www.youtube.com/embed/m-v5Pl6ECJY",
      "https://www.youtube.com/embed/UgGQDP0HK_Q",
      "https://www.youtube.com/embed/1KkZOH-9-8Q",
      "https://www.youtube.com/embed/jDbvMInxoFw",
      "https://www.youtube.com/embed/7WOC_Q4jKN0",
      "https://www.youtube.com/embed/VWfjkAYt-Kk"
    ],
    Retiring: [
      "https://www.youtube.com/embed/NQKAZyJ-JaM",
      "https://www.youtube.com/embed/lRCxCz8QuwA",
      "https://www.youtube.com/embed/1r3TZHhRxBs",
      "https://www.youtube.com/embed/5x9i9fv8q0Q",
      "https://www.youtube.com/embed/K0SxwVpP67A",
      "https://www.youtube.com/embed/ZwLpBTYqE0g",
      "https://www.youtube.com/embed/KaVz-yf3y3g",
      "https://www.youtube.com/embed/Uq9iqMJ1y58",
      "https://www.youtube.com/embed/JgIk9bnRVvk",
      "https://www.youtube.com/embed/Uo-kSxHNSDQ"
    ]
  };

  return links[categoryName][lessonNumber - 1] || "https://www.youtube.com/embed/dQw4w9WgXcQ";
}

export default initializeDatabase;