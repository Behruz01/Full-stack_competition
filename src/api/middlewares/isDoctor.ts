import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/custom-error";
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
    return new CustomError("You are not Doctor", 400);;
  }
  next();
};

module.exports = isDoctor;
