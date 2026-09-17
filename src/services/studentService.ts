import { Student } from "../models/Student";

export const getAllStudents = async () => {
    return await Student.find();
};

export const createStudent = async (studentData: {
    name: string;
    email: string;
    course: string;
    enrollmentDate: string;
    isActive?: boolean;
}) => {
    const student = await Student.create(studentData);
    return student;
};

export const getStudentById = async (id: string) => {
    return await Student.findById(id);
};

export const updateStudent = async (
    id: string,
    studentData: {
        name?: string;
        email?: string;
        course?: string;
        enrollmentDate?: string;
        isActive?: boolean;
    }
) => {
    return await Student.findByIdAndUpdate(
        id,
        studentData,
        {
            new: true,
            runValidators: true
        }
    );
};

export const deleteStudent = async (id: string) => {
    return await Student.findByIdAndDelete(id);
};
