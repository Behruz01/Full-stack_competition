"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    service_name: {
        type: String,
        require: true,
    },
    service_price: {
        type: String,
        required: true,
    },
    clinic_address: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true,
        ref: "Clinic",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Service", schema);
