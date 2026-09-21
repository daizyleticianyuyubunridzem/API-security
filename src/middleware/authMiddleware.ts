import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                success: false,
                message: "Authentication required"
            });
            return;
        }

        // Extract the JWT from the Authorization header
        const token = authHeader.split(" ")[1];
        
        // Verify that the token is valid and has not expired
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        );
        (req as any).user = decoded;

        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};