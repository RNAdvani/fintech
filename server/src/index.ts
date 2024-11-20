import express, { Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRoutes } from './routes/user.routes';
import { errorMiddleware } from './lib/ErrorHandler';
import { connectDb } from './lib/db';
import morgan from 'morgan';
import { yahooRoutes } from './routes/yahoo';
import { watchlistRoutes } from './routes/watchlist';
import { simulate } from './controllers/simulate';
import { expenseRoutes } from './routes/expenses.routes';
import { categoriesRoutes } from './routes/categories.routes';
import { lessonRoutes } from './routes/lessons.routes';
import initializeDatabase from './initialize';
import { VercelRequest, VercelResponse } from '@vercel/node';

dotenv.config({
    path: '.env',
});

const PORT = process.env.PORT as string;

const app = express();
app.use(express.json());
connectDb();

app.use(cors({
    origin: 'http://localhost:3000', // Remove the space after the URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Add OPTIONS
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Add this line to allow credentials
}));

// Add a pre-flight route handler
// app.options('*', cors());
app.use(morgan('dev'));

app.use('/api/v1/users', userRoutes);
app.use("/api/v1/stocks",yahooRoutes)
app.use("/api/v1/watchlist",watchlistRoutes)
app.use("/api/v1/categories",categoriesRoutes)
app.use("/api/v1/lessons",lessonRoutes)
app.post("/api/v1/simulate",simulate)
app.use("/api/v1/expenses",expenseRoutes)

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default (req: VercelRequest, res: VercelResponse) => {
    app(req as any, res as any);
  };