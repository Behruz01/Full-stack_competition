"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = require("../utils/custom-error");
const isAdmin = async (req, res, next) => {
    if (!req.verified || req.verified.role !== "admin") {
        return new custom_error_1.CustomError("You are not admin!", 400);
    }
    next();
};
module.exports = isAdmin;
