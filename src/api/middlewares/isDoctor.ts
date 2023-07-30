import { NextFunction, Request, Response } from "express";
interface DoctorRequest extends Request {
  verified?: {
    role: string;
  };
}

const isDoctor = async (
  req: DoctorRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.verified || req.verified.role !== "Doctor") {
    return res.status(400).json({ message: "You are not Doctor" });
  }
  next();
};

module.exports = isDoctor;
