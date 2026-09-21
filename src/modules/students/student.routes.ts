import express from "express";
import { 
    getStudents, 
    createStudentController, 
    getStudent, 
    updateStudentController, 
    deleteStudentController
} 
from "./student.controller";
import { authMiddleware } from "../../middleware/authMiddleware";

const router = express.Router();
router.use(authMiddleware);

router.get("/", getStudents);
router.post("/", createStudentController);
router.get("/:id", getStudent);
router.put('/:id', updateStudentController);
router.delete("/:id", deleteStudentController);

export default router;