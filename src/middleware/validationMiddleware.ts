import { Request, Response, NextFunction } from "express";

export const validateStudent = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { name, email, course, enrollmentDate, isActive } = req.body;

    if (!name || typeof name !== "string" || name.trim() === "") {
        res.status(400).json({
            success: false,
            message: "Name is required"
        });
        return;
    }

    if (!email || typeof email !== "string") {
        res.status(400).json({
            success: false,
            message: "Valid email is required"
        });
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        res.status(400).json({
            success: false,
            message: "Invalid email format"
        });
        return;
    }

    if (!course || typeof course !== "string" || course.trim() === "") {
        res.status(400).json({
            success: false,
            message: "Course is required"
        });
        return;
    }

    if (enrollmentDate && isNaN(Date.parse(enrollmentDate))) {
        res.status(400).json({
            success: false,
            message: "Invalid enrollment date"
        });
        return;
    }

    if (isActive !== undefined && typeof isActive !== "boolean") {
        res.status(400).json({
            success: false,
            message: "isActive must be a boolean"
        });
        return;
    }

    next();
};

export const validateRegister = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { username, email, password } = req.body;

    if (!username || typeof username !== "string" || username.trim() === "") {
        res.status(400).json({
            success: false,
            message: "Username is required"
        });
        return;
    }

    if (!email || typeof email !== "string") {
        res.status(400).json({
            success: false,
            message: "Email is required"
        });
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        res.status(400).json({
            success: false,
            message: "Invalid email format"
        });
        return;
    }

    if (!password || typeof password !== "string") {
        res.status(400).json({
            success: false,
            message: "Password is required"
        });
        return;
    }

    if (password.length < 6) {
        res.status(400).json({
            success: false,
            message: "Password must be at least 6 characters"
        });
        return;
    }

    next();
};

export const validateLogin = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { identifier, password } = req.body;

    if (!identifier || typeof identifier !== "string") {
        res.status(400).json({
            success: false,
            message: "Username or email is required"
        });
        return;
    }

    if (!password || typeof password !== "string") {
        res.status(400).json({
            success: false,
            message: "Password is required"
        });
        return;
    }

    next();
};