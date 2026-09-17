import { Request, Response, NextFunction } from "express";
import { 
    getAllStudents, 
    createStudent,  
    getStudentById, 
    updateStudent,
    deleteStudent
 } 
    from "../services/studentService";

export const getStudents = async ( req: Request, res: Response, next: NextFunction ): Promise<void> => {
    try {
        const students = await getAllStudents();
        res.status(200).json({
            success: true,
            data: students
        });
    } catch (error) {
        next(error);
    }
};

export const createStudentController = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const student = await createStudent (req.body);

        res.status(201).json({
            success: true,
            data: student
        });
    } catch (error) {
        console.error(error);

        res.status(400).json({
            success: false,
            message: "Failed to create student"
        });
    }
};

export const getStudent = async ( 
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const student = await getStudentById (req.params.id as string);

        if (!student) {
            res.status(404).json({
                success: false,
                message: "Student not found"
            });
            return;
        }

        res.status(200).json({
            success: true,
            data: student
        });
    } catch (error) {
        next(error);
    }
};

export const updateStudentController = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const student = await updateStudent(
            req.params.id as string,
            req.body
        );

        if (!student) {
            res.status(404).json({
                success: false,
                message: "Student not found"
            });
            return;
        }

        res.status(200).json({
            success: true,
            data: student
        });
    } catch (error) {
        next(error);
    }
};

export const deleteStudentController = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const student = await deleteStudent(req.params.id as string);

        if (!student) {
            res.status(404).json({
                success: false,
                message: "Student not found"
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });
    } catch (error) {
        next(error);

    }
};