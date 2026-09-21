import { Request, Response, NextFunction } from "express";
import { registerUser, loginUser } from "./auth.service";

export const register = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { username, email, password } = req.body;

        const user = await registerUser(username, email, password);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user
        });
    } catch (error) {
        next(error);
    }
};

export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { identifier, password } = req.body;

        const result = await loginUser(identifier, password);

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result
        });
    } catch (error) {
        next(error);
    }
};

export const logout = async (
    req: Request,
    res: Response
): Promise<void> => {
    res.status(200).json({
        success: true,
        message: "Logout successful. Please remove the JWT token from the client."
    });
};