import { NextFunction, Request, Response } from "express";
import Clinic from "../../models/Clinic";

interface CustomRequest extends Request {
  imageName: string;
}

export const createClinic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { clinic_name, clinic_about, clinic_address, call_center } = req.body;
    const { imageName } = req as CustomRequest;
    Clinic.create({
      clinic_name,
      clinic_about,
      clinic_address,
      call_center,
      clinic_image: imageName,
    });

    res.status(201).json({ message: "Clinic created successfully" });
  } catch (error) {
    next(error);
  }
};

// get all
export const getClinics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Clinic.find();
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

// update clinic
export const updateClinic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { clinic_name, clinic_about, clinic_address, call_center } = req.body;
    const { imageName } = req as CustomRequest;
    await Clinic.findByIdAndUpdate(id, {
      $set: {
        clinic_name,
        clinic_about,
        clinic_address,
        call_center,
        clinic_image: imageName,
      },
    });

    res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    next(error);
  }
};

// delete clinic

export const deleteClinic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await Clinic.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted clinic" });
  } catch (error) {
    next(error);
  }
};

// get one clinic
export const getOneClinic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const data = await Clinic.findById(id)
      .populate("doctor_clinic_address")
      .exec();

    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);

    next(Error);
  }
};
