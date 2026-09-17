import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
): void => {

    console.error(err);

    // Mongoose validation error
    if (err instanceof mongoose.Error.ValidationError) {
        res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: Object.values(err.errors).map(
                (error: any) => error.message
            )
        });
        return;
    }

    // Invalid MongoDB ID
    if (err instanceof mongoose.Error.CastError) {
        res.status(400).json({
            success: false,
            message: "Invalid student ID"
        });
        return;
    }

    // Duplicate email
    if (err.code === 11000) {
        res.status(409).json({
            success: false,
            message: "Email already exists"
        });
        return;
    }

    // General server error
    res.status(500).json({
        success: false,
        message: "Internal server error"
    });
};