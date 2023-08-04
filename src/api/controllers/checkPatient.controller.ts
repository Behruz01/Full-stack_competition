import { NextFunction, Request, Response } from "express";
import Inspection from "../../models/Inspection";
import Patient from "../../models/Patient";

interface CustomRequest {
  doctorId?: string;
}

export const getCheckPaint = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { doctorId } = req as CustomRequest;
    const doctorId = "64c8d8726bf500161d3114fb";
    const patients = await Inspection.find({ doctor: doctorId });
    const users = await Patient.find();
    

    res.status(200).json({ patients });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//
export const getOnePatientInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { doctorId } = req as CustomRequest;
    // const { patientId } = req.params;
    const doctorId = "64c8d8726bf500161d3114fb";
    const patientId = "64c7b32987dce3b702f38fd8";
    const inspections = await Inspection.find({
      $and: [{ patient: patientId }, { doctor: doctorId }],
    });

    res.status(200).json({ inspections });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
