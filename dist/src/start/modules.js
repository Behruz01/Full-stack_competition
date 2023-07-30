"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_handler_1 = require("../api/middlewares/error-handler");
const modules = async (app) => {
    app.use(express_1.default.json());
    //   routes
    app.use(error_handler_1.errorHandler);
};
exports.default = modules;
