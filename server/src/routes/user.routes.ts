import express, { Request, Response } from "express";
import {
  createUser,
  getCredits,
  getLeaderboard,
  getStreak,
  getUser,
  updateUser,
  updateUserCredits,
} from "../controllers/user.controller";
import bodyParser from "body-parser";
import { get } from "axios";
const router = express.Router();

router.post(
  "/create",
  bodyParser.raw({ type: "application/json" }),
  createUser
);
router.post("/update", updateUser);
router.post("/get", getUser);
router.post("/update-credits", updateUserCredits);
router.get("/getleaderboard", getLeaderboard);
router.post("/getcredits", getCredits);
router.post("/getstreak", getStreak);

export { router as userRoutes };
