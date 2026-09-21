import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },


    course: {
        type: String,
        required: true,
        trim: true
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