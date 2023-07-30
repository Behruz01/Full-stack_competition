"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    clinic_name: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Clinic", schema);
