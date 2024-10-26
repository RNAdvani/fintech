import express from 'express';
import { getLessonContent, submitQuiz } from '../controllers/lesson.controller';
const router = express.Router();

router.post("/content",getLessonContent);
router.post("/submit",submitQuiz);


export { router as lessonRoutes };