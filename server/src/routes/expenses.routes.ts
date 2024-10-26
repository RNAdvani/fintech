import express, { Request, Response } from "express";
import {
   addExpense,
   deleteExpense,
   getExpense,
   getExpenses,
   updateExpense,
} from "../controllers/expenses.controller";
import bodyParser from "body-parser";
const router = express.Router();

router.post("/add-expense", addExpense);
router.post("/update-expense", updateExpense);
router.post("/get-expenses", getExpenses);
router.post("/get-expense", getExpense);
router.post("/delete-expense", deleteExpense);

export { router as expenseRoutes };
