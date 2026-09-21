import bcrypt from "bcrypt";
import { User } from "./user.model";
import jwt from "jsonwebtoken";

export const registerUser = async (
    username: string,
    email: string,
    password: string
) => {
    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (existingUser) {
        throw new Error("Username or email already exists");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        passwordHash
    });

    return {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
    };
};

export const loginUser = async (
    identifier: string,
    password: string
) => {
    const user = await User.findOne({
        $or: [
            { username: identifier },
            { email: identifier }
        ]
    });

    if (!user) {
        throw new Error("Invalid username/email or password");
    }

    const passwordMatch = await bcrypt.compare(
        password,
        user.passwordHash
    );

    if (!passwordMatch) {
        throw new Error("Invalid username/email or password");
    }

    const token = jwt.sign(
        {
            id: user._id.toString(),
            role: user.role
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn: "1h"
        }
    );

    return {
        token,
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }
    };
};