import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import Patient from "../../models/Patient";
import { CustomError } from "../utils/custom-error";
import jwt from "jsonwebtoken";
import config from "../../../config/config";
import Doctor from "../../models/Doctor";

export const patientLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { patient_email, patient_password } = req.body;

    const findPatient = await Patient.findOne({ patient_email }).exec();

    if (!findPatient) return new CustomError("Invalid email or password!", 403);

    if (!findPatient || !findPatient.patient_password) {
      throw new Error("Invalid email or password!");
    }
    const verify = await bcrypt.compare(
      patient_password,
      findPatient.patient_password
    );
    if (!verify) return new CustomError("Invalid email or password!", 403);

    if (!config.SECRET_KEY) {
      throw new Error("SECRET_KEY is not defined in the config");
    }

    const token = jwt.sign({ id: findPatient._id }, config.SECRET_KEY);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

export const doctorLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { clinic, phone_number } = req.body;
    const findDoctor = await Doctor.findOne({
      doctor_phone_number: phone_number,
    });
    console.log(findDoctor);
  } catch (error) {
    next(error);
  }
};
