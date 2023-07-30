"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAdmin = async (req, res, next) => {
    if (!req.verified || req.verified.role !== "admin") {
        return res.status(400).json({ message: "You are not admin" });
    }
    next();
};
module.exports = isAdmin;
