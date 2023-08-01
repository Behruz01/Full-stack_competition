"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    doctor_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Doctor",
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Patient",
    },
    inspection: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Inspection", schema);
