import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import studentRoutes from "./modules/students/student.routes";

import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Student API is running");
});

app.use("/api/students", studentRoutes);

app.use(errorHandler);

const startServer = async (): Promise<void> => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();