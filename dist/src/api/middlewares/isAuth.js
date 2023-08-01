"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config/config"));
const custom_error_1 = require("../utils/custom-error");
const isAuth = async (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
    if (!token) {
        return new custom_error_1.CustomError("Invalid token", 403);
    }
    jsonwebtoken_1.default.verify(token, config_1.default.SECRET_KEY, (err, data) => {
        if (err) {
            if (err instanceof jsonwebtoken_1.JsonWebTokenError) {
                return new custom_error_1.CustomError("Invalid token!", 401);
            }
            else if (err instanceof jsonwebtoken_1.TokenExpiredError) {
                return new custom_error_1.CustomError("Token", 403);
            }
            else {
                return new custom_error_1.CustomError("Internal server error", 500);
            }
        }
        req.verified = data;
        next();
    });
};
exports.default = isAuth;
