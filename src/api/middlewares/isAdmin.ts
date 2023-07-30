import { NextFunction, Request, Response } from "express";
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
    return res.status(400).json({ message: "You are not admin" });
  }
  next();
};

module.exports = isAdmin;
