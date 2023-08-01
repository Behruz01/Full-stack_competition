import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/custom-error";
interface AdminRequest extends Request {
  verified?: {
    role: string;
  };
}

const isAdmin = async (
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.verified || req.verified.role !== "admin") {
    return new CustomError("You are not admin!", 400);
  }
  next();
};

module.exports = isAdmin;
