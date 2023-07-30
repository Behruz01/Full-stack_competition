"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    doctor_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true,
        ref: "Doctor",
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true,
        ref: "Potient",
    },
    inspection: {
        type: String,
        require: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Inspection", schema);
