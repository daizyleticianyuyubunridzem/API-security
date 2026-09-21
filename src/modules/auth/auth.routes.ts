import express from "express";
import { register, login, logout } from "./auth.controller";
import { validateRegister, validateLogin } from "../../middleware/validationMiddleware";

const router = express.Router();

router.post("/register",validateRegister,  register);
router.post('/login',validateLogin, login);
router.post('/logout', logout);

export default router;