import { ExpenseModel } from "../schemas";
import { ErrorHandler } from "../lib/ErrorHandler";
import { TryCatch } from "../lib/TryCatch";

export const addExpense = TryCatch(async (req, res) => {
  const { amount, description, date } = req.body;
  const expense = await ExpenseModel.create({ amount, description, date });
  return res.status(201).json({ expense });
});

export const getExpenses = TryCatch(async (req, res) => {                                                                                             
  const expenses = await ExpenseModel.find();
  return res.status(200).json({ expenses });
});

export const getExpense = TryCatch(async (req, res) => {
  const { id } = req.params;
  const expense = await ExpenseModel.findById(id);
  if (!expense) {
    throw new ErrorHandler(404, "Expense not found");
  }
  return res.status(200).json({ expense });
});

export const updateExpense = TryCatch(async (req, res) => {                                                                                   
  const { id } = req.params;
  const expense = await ExpenseModel.findByIdAndUpdate(id, req.body as any, { new: true });
   if (!expense) {
      throw new ErrorHandler(404, "Expense not found");
   }
   return res.status(200).json({ expense });
});

export const deleteExpense = TryCatch(async (req, res) => {
  const { id } = req.params;
  const expense = await ExpenseModel.findByIdAndDelete(id);
  if (!expense) {
    throw new ErrorHandler(404, "Expense not found");
  }
  return res.status(200).json({ expense });
});