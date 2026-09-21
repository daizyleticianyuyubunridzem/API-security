import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from  "cors";
import connectDB from "./config/db";
import studentRoutes from "./modules/students/student.routes";
import authRoutes from "./modules/auth/auth.routes";
import { apiRateLimiter } from "./middleware/rateLimitMiddleware";

import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(apiRateLimiter);

app.get("/", (req, res) => {
    res.send("Student API is running");
});

app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);
app.use(errorHandler);

const startServer = async (): Promise<void> => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();