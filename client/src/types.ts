import { Category } from "@my-org/types";
import { Icons } from "./components/iconss";


export type CurrencyType = "₹" | "$" | "€" | "£";

export interface CategoryWithImage extends Category {
  image: React.ReactNode;
}

// src/types/index.ts
export type Cell = {
  blocked: boolean;
  answer: string;
  isFirstLetter: boolean; // Make sure this is required (not optional)
  direction?: "across" | "down"; // Optional property for direction
};

export type Grid = Cell[][];

export interface DialogHandle {
  open: () => void;
  close: () => void;
}

export interface StockQuote {
  regularMarketPrice: {
    raw: number;
  };
  regularMarketTime: {
    raw: number;
  };
}

export interface StockData {
  quoteSummary: {
    result: {
      price: StockQuote;
    }[];
  };
}

export interface StockPoint {
  date: number;
  close: number;
}

export interface CategoryWithImage extends Category {
  image: React.ReactNode;
}


export interface ExpenseType {
  id: string;
  description: string;
  amount: number;
  type: "want" | "need"; 
  dueType?: "string"
  createdAt: Date;
}

export type Calculations = {
  needsTotal: number;
  wantsTotal: number;
  totalSaved: number;
  monthIncome: number;
};


interface Option {
  optionText: string
  isCorrect: boolean
  _id: string
}

interface Question {
  _id: string
  questionText: string
  options: Option[]
}

export interface QuizData {
  lessonTitle: string
  lessonContent: string
  category: string
  quiz: {
    _id: string
    lesson: string
    category: string
    questions: Question[]
    isMegaQuiz: boolean
  }
}