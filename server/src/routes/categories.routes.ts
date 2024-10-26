import express from 'express';
import { getAllCategories, getCategoryProgress } from '../controllers/categories.controller';
const router = express.Router();

router.get("/all",getAllCategories);
router.post("/progress",getCategoryProgress);

export { router as categoriesRoutes };