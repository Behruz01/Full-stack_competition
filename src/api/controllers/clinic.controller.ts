import { NextFunction, Request, Response } from "express";
import Clinic from "../../models/Clinic";
import Doctor from "../../models/Doctor";
import Service from "../../models/Service";

interface CustomRequest extends Request {
  imageName?: {
    image?: string;
  };
}

export const createClinic = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { clinic_name, clinic_about, clinic_address, call_center } = req.body;
    const { imageName: image } = req;
    Clinic.create({
      clinic_name,
      clinic_about,
      clinic_address,
      call_center,
      image: image,
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
    const { imageName: image } = req as CustomRequest;
    await Clinic.findByIdAndUpdate(id, {
      $set: {
        clinic_name,
        clinic_about,
        clinic_address,
        call_center,
        image: image,
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

    const clinic = await Clinic.findById(id);
    const findDoctors = await Doctor.find({ doctor_clinic_address: id });
    const findService = await Service.find({ clinic_address: id });
    const newData = {
      clinic,
      doctors: findDoctors,
      services: findService,
    };

    res.status(200).json({ data: newData });
  } catch (error) {
    console.log(error);

    next(Error);
  }
};
