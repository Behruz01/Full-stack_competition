"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    doctor_name: {
        type: String,
        required: true,
    },
    doctor_lname: {
        type: String,
        required: true,
    },
    doctor_phone_number: {
        type: String,
        required: true,
        unique: true,
    },
    doctor_image: {
        type: String,
        required: true,
    },
    doctor_specialty: {
        type: String,
        required: true,
    },
    doctor_working_time: {
        type: String,
        required: true,
    },
    doctor_working_day: {
        type: String,
        required: true,
    },
    doctor_floor_no: {
        type: Number,
        required: true,
    },
    doctor_room_no: {
        type: Number,
        required: true,
    },
    doctor_qualification: {
        type: String,
        required: true,
    },
    doctor_clinic_address: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "doctor",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Doctor", schema);
