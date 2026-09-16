import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    course: {
        type: String,
        required: true
    },

    enrollmentDate: {
        type: Date,
        required: true
    },

    isActive: {
        type: Boolean,
        default: true
    }
});

export const Student = model("Student", studentSchema);