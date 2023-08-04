import { NextFunction, Request, Response } from "express";
import Inspection from "../../models/Inspection";

interface CustomRequest extends Request {
  doctorId?: string;
  imageName?: {
    image: string;
  };
}
export const getCheckPaint = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { doctorId } = req as CustomRequest;
    const doctorId = "64c8d8726bf500161d3114fb";
    const patients = await Inspection.find({ doctor: doctorId }).sort({
      createdAt: "asc",
    });

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
    const { patientId } = req.params;
    const doctorId = "64c8d8726bf500161d3114fb";
    const inspections = await Inspection.find({
      $and: [{ patient: patientId }, { doctor: doctorId }],
    });

    res.status(200).json({ inspections });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// create inspection and image

export const createInspection = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { doctorId } = req as CustomRequest;
    const { inspectionId } = req.params;
    const doctorId = "64c8d8726bf500161d3114fb";
    const { image } = req.imageName || {};
    const { inspection_desc } = req.body;
    const inspections = await Inspection.findByIdAndUpdate(inspectionId, {
      $set: {
        inspection_desc,
        inspection_image: image,
        inspection_status: "checked",
      },
    });

    res.status(200).json({ message: "Tashxis qo'yildi" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// the next one
export const theNextInspection = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { doctorId } = req as CustomRequest;
    const doctorId = "64c8d8726bf500161d3114fb";
    const { image } = req.imageName || {};
    const inspections = (
      await Inspection.find({ inspection_status: "pending" })
    )[0];

    res.status(200).json({ data: inspections });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
