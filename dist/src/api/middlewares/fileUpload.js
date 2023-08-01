"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUpload = void 0;
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const custom_error_1 = require("../utils/custom-error");
const fileUpload = (req, res, next) => {
    if (req.files) {
        const image = req.files?.image;
        if (!image)
            return new custom_error_1.CustomError("Image not found", 400);
        const extraname = path_1.default.extname(image.name);
        const imageName = `${(0, uuid_1.v4)()}${extraname}`;
        image.mv(`${process.cwd()}/uploads/${imageName}`);
        req.imageName = imageName;
        next();
    }
    else {
        const image = req.body?.image;
        if (!image)
            return new custom_error_1.CustomError("Image not found", 400);
        req.imageName = image;
        next();
    }
};
exports.fileUpload = fileUpload;
