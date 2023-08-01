import { NextFunction, Request, Response } from "express";
import Doctor from "../../models/Doctor";

interface CustomRequest extends Request {
  imageName: string;
}
export const createDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { imageName } = req as CustomRequest;

    const {
      doctor_name,
      doctor_lname,
      doctor_phone_number,
      doctor_specialty,
      doctor_working_time,
      doctor_working_day,
      doctor_floor_no,
      doctor_room_no,
      doctor_qualification,
      doctor_clinic_adress,
    } = req.body;
    Doctor.create({
      doctor_name,
      doctor_lname,
      doctor_phone_number,
      doctor_specialty,
      doctor_working_time,
      doctor_working_day,
      doctor_floor_no,
      doctor_room_no,
      doctor_qualification,
      doctor_clinic_adress,
      doctor_image: imageName,
    });
    res.status(200).json({ message: "Created doctor" });
  } catch (error) {
    next(error);
  }
};

// read all
export const getAllDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Doctor.find();

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

// update doctor
export const updateDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { imageName } = req as CustomRequest;

    const {
      doctor_name,
      doctor_lname,
      doctor_phone_number,
      doctor_specialty,
      doctor_working_time,
      doctor_working_day,
      doctor_floor_no,
      doctor_room_no,
      doctor_qualification,
      doctor_clinic_adress,
    } = req.body;
    Doctor.findByIdAndUpdate(id, {
      $set: {
        doctor_name,
        doctor_lname,
        doctor_phone_number,
        doctor_specialty,
        doctor_working_time,
        doctor_working_day,
        doctor_floor_no,
        doctor_room_no,
        doctor_qualification,
        doctor_clinic_adress,
        doctor_image: imageName,
      },
    });
    res.status(200).json({ message: "Created doctor" });
  } catch (error) {
    next(error);
  }
};

// delete doctor
export const deleteDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await Doctor.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// get one
export const getOneDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await Doctor.findById(id);

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
