import express from "express";
import { 
    getStudents, 
    createStudentController, 
    getStudent, 
    updateStudentController, 
    deleteStudentController
} 
from "./student.controller";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudentController);
router.get("/:id", getStudent);
router.put('/:id', updateStudentController);
router.delete("/:id", deleteStudentController);

export default router;