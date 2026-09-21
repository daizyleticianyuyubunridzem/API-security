import { Request, Response, NextFunction } from "express";

export const authorize = (...allowedRoles: string[]) => {
    return (
        req: Request,
        res: Response,
        next: NextFunction
    ): void => {
        const user = (req as any).user;

        if (!user) {
            res.status(401).json({
                success: false,
                message: "Authentication required"
            });
            return;
        }

        if (!allowedRoles.includes(user.role)) {
            res.status(403).json({
                success: false,
                message: "You are not authorized to perform this action"
            });
            return;
        }

        next();
    };
};