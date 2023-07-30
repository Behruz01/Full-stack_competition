"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    potient_name: {
        type: String,
        required: true,
    },
    potient_lname: {
        type: String,
        required: true,
    },
    potient_age: {
        type: String,
        required: true,
    },
    potient_phone_number: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Potient", schema);
