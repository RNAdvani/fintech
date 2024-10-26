import mongoose from "mongoose";

export interface User {
    clerkId: string;
  name: string;
  email: string;
  monthlyIncome: number;
  courses: string[];
  currency: string;
  needRatio: number;
  wantRatio: number;
  investmentRatio: number;
  wishlist: string[];
  credits: number;
  progress: {
    [category: string]: {
      lessonsCompleted: string[];
      quizResults: {
        quizId: string;
        score: number;
        completedAt: Date;
      }[];
      megaQuizCompleted: boolean;
    };
  };
  }

  export interface Category{
    _id: mongoose.Schema.Types.ObjectId | string;
    name: 'Investment'| 'Saving'| 'Earning'| 'Retiring';
    description: string;
    lessons: mongoose.Schema.Types.ObjectId[] | string[];
    megaQuiz: mongoose.Schema.Types.ObjectId | string;
  }

  export interface Quiz{
    name: string;
    questions: mongoose.Schema.Types.ObjectId[];
  }

  export interface MegaQuiz{
    _id: mongoose.Schema.Types.ObjectId;
    category: mongoose.Schema.Types.ObjectId;
    questions: mongoose.Schema.Types.ObjectId[];
  }

  export interface Question{
    question: string;
    options: {
      optionText: string, 
      isCorrect: boolean
    }[]
  }

  export interface Lesson  {
    _id: mongoose.Schema.Types.ObjectId;
    category: string;
    title: string;
    content: string;
    orderInCategory: number;
    quiz: Quiz;
    lessonNumber: number;
  }

  export interface Expense{
    _id: mongoose.Schema.Types.ObjectId | string;
    // clerkId: string;
    amount: number;
    description: string;
    date: Date;
    // category: string;
    // type: 'need' | 'want';
    createdAt: Date;
    // dueType?: string;
  }