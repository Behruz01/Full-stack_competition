"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    doctor_name: {
        type: String,
        require: true,
    },
    doctor_lname: {
        type: String,
        require: true,
    },
    doctor_phone_number: {
        type: String,
        required: true,
    },
    doctor_image: {
        type: String,
        required: true,
    },
    doctor_specialty: {
        type: String,
        require: true,
    },
    doctor_working_time: {
        type: String,
        require: true,
    },
    doctor_working_day: {
        type: String,
        require: true,
    },
    doctor_floor_no: {
        type: Number,
        require: true,
    },
    doctor_room_no: {
        type: Number,
        require: true,
    },
    doctor_qualification: {
        type: Number,
        require: true,
    },
    doctor_clinic_adress: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true,
        ref: "Clinic",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Doctor", schema);
