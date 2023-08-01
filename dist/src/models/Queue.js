"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    service_name: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Clinic",
    },
    doctor_name: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Doctor",
    },
    queue_no: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Queue", schema);
