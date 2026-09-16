import { Student } from "../models/Student";

export const getAllStudents = async () => {
    return await Student.find();
};