"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = require("../utils/custom-error");
const isDoctor = async (req, res, next) => {
    if (!req.verified || req.verified.role !== "Doctor") {
        return new custom_error_1.CustomError("You are not Doctor", 400);
        ;
    }
    next();
};
module.exports = isDoctor;
