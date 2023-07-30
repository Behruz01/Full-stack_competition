"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isDoctor = async (req, res, next) => {
    if (!req.verified || req.verified.role !== "Doctor") {
        return res.status(400).json({ message: "You are not Doctor" });
    }
    next();
};
module.exports = isDoctor;
