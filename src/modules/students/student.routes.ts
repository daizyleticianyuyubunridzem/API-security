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
import { validateStudent } from "../../middleware/validationMiddleware";
import { authorize } from "../../middleware/authorizationMiddleware";

const router = express.Router();
router.use(authMiddleware);

router.get("/", getStudents);
router.post("/", validateStudent, createStudentController);
router.get("/:id", getStudent);
router.put('/:id', validateStudent, updateStudentController);
router.delete("/:id", authorize('admin'), deleteStudentController);

export default router;