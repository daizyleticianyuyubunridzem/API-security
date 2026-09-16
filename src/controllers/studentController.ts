import { Request, Response } from "express";
import { getAllStudents } from "../services/studentService";

export const getStudents = async ( req: Request, res: Response ): Promise<void> => {
    try {
        const students = await getAllStudents();
        res.status(200).json({
            success: true,
            data: students
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to retrieve students"
        });
    }
};