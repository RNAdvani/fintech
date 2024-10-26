import { MegaQuiz } from "@my-org/types";
import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
  clerkId: string;
  name: string;
  email: string;
  monthlyIncome: number;
  courses: string[];
  watchlist: string[];
  credits: number;
  lastQuizDate: Date;
  streak: number;
  progress: Map<string, {
    lessonsCompleted: string[];
    quizResults: {
      quizId: string;
      score: number;
      completedAt: Date;
    }[];
    megaQuizCompleted: boolean;
  }>;
}

const UserSchema: Schema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  monthlyIncome: Number,
  courses: { type: [String], default: [] },
  wishlist: { type: [String], default: ["%5EBSESN"] },
  credits: { type: Number, default: 15 },
  needRatio: { type: Number },
  wantRatio: { type: Number },
  investmentRatio: { type: Number },
  lastQuizDate: {
    type: Date,
    default: null,
  },
  streak: {
    type: Number,
    default: 0,
  },
  progress: {
    type: Map,
    of: new Schema({
      lessonsCompleted: [String],
      quizResults: [
        {
          quizId: String,
          score: Number,
          completedAt: Date,
        },
      ],
    }),
  },
});

export const UserModel = mongoose.model<User>("User", UserSchema);

export interface Category extends Document {
  name: string;
  description: string;
  lessons: string[];
  megaQuiz: MegaQuiz;
}

const CategorySchema: Schema = new Schema({
  name: {
    type: String,
    enum: ["Investment", "Saving", "Earning", "Retiring"],
    required: true,
  },
  description: String,
  lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
  megaQuiz: { type: Schema.Types.ObjectId, ref: "Quiz" },
});

export const CategoryModel = mongoose.model<Category>(
  "Category",
  CategorySchema
);

export interface Lesson extends Document {
  _id: string;
  category: string;
  title: string;
  content: string;
  orderInCategory: number;
  quiz: Quiz;
  lessonNumber: number;
}

const LessonSchema: Schema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  title: { type: String, required: true },
  content: String,
  orderInCategory: { type: Number, required: true },
  quiz: { type: Schema.Types.ObjectId, ref: "Quiz" },
});

export const LessonModel = mongoose.model<Lesson>("Lesson", LessonSchema);

export interface Quiz extends Document {
  _id: Schema.Types.ObjectId;
  lesson?: string;
  category?: string;
  questions: Question[];
  isMegaQuiz: boolean;
}

const QuizSchema: Schema = new Schema({
  lesson: { type: Schema.Types.ObjectId, ref: "Lesson" },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  isMegaQuiz: { type: Boolean, default: false },
});

export const QuizModel = mongoose.model<Quiz>("Quiz", QuizSchema);

export interface Question extends Document {
  questionText: string;
  options: {
    optionText: string;
    isCorrect: boolean;
    _id: Schema.Types.ObjectId;
  }[];
}

const QuestionSchema: Schema = new Schema({
  questionText: { type: String, required: true },
  options: [
    {
      optionText: String,
      isCorrect: Boolean,
    },
  ],
});

export const QuestionModel = mongoose.model<Question>(
  "Question",
  QuestionSchema
);

export interface Expense extends Document {
  amount: number;
  description: string;
  date: Date;
  // category: string;
}

const ExpenseSchema: Schema = new Schema({
  // userId: { type: Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date },
  // category: { type: String, required: true },
});

export const ExpenseModel = mongoose.model<Expense>("Expense", ExpenseSchema);
