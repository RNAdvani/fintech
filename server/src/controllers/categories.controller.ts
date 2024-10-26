import mongoose from "mongoose";
import { TryCatch } from "../lib/TryCatch";
import { CategoryModel, LessonModel, UserModel } from "../schemas";

export const getAllCategories = TryCatch(async (req,res,next)=>{
    const categories = await CategoryModel.find().select('name description');
    return res.status(200).json({
        success:true,
        data:categories,
        message:'Categories retrieved successfully'
    });
})


export const getCategoryProgress = TryCatch(async (req,res,next) => {
  const { clerkId, categoryId } = req.body;
  console.log('Received request:', { clerkId, categoryId });

  const user = await UserModel.findOne({ clerkId });
  console.log('Found user:', user ? 'Yes' : 'No');
  if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
  }

  const category = await CategoryModel.findById(categoryId);
  console.log('Found category:', category ? 'Yes' : 'No');
  if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
  }

  // Initialize progress if it doesn't exist
  if (!user.progress) {
        user.progress = new Map();
  }

  // Initialize category progress if it doesn't exist
  if (!user.progress.get(categoryId)) {
      user.progress.set(categoryId,{ lessonsCompleted: [], quizResults: [], megaQuizCompleted: false });
  }

  const userProgress = user.progress.get(categoryId);
  const completedLessonsCount = userProgress?.lessonsCompleted.length;
  const availableLessons = await LessonModel.find({ _id: { $in: category.lessons } }).select('title');
  const isCategoryCompleted = completedLessonsCount === 10;

  return res.status(200).json({
      success: true,
      data: {
          categoryName: category.name,
          completedLessonsCount,
          availableLessons,
          isCategoryCompleted,
          canTakeMegaQuiz: completedLessonsCount === 10 && !userProgress?.megaQuizCompleted
      },
  });

});