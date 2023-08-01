"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneDoctor = exports.deleteDoctor = exports.updateDoctor = exports.getAllDoctor = exports.createDoctor = void 0;
const Doctor_1 = __importDefault(require("../../models/Doctor"));
const createDoctor = async (req, res, next) => {
    try {
        const { imageName } = req;
        const { doctor_name, doctor_lname, doctor_phone_number, doctor_specialty, doctor_working_time, doctor_working_day, doctor_floor_no, doctor_room_no, doctor_qualification, doctor_clinic_adress, } = req.body;
        Doctor_1.default.create({
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
    }
    catch (error) {
        next(error);
    }
};
exports.createDoctor = createDoctor;
// read all
const getAllDoctor = async (req, res, next) => {
    try {
        const data = await Doctor_1.default.find();
        res.status(200).json({ data });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllDoctor = getAllDoctor;
// update doctor
const updateDoctor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { imageName } = req;
        const { doctor_name, doctor_lname, doctor_phone_number, doctor_specialty, doctor_working_time, doctor_working_day, doctor_floor_no, doctor_room_no, doctor_qualification, doctor_clinic_adress, } = req.body;
        Doctor_1.default.findByIdAndUpdate(id, {
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
    }
    catch (error) {
        next(error);
    }
};
exports.updateDoctor = updateDoctor;
// delete doctor
const deleteDoctor = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Doctor_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: "Deleted successfully" });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteDoctor = deleteDoctor;
// get one
const getOneDoctor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await Doctor_1.default.findById(id);
        res.status(200).json({ data });
    }
    catch (error) {
        next(error);
    }
};
exports.getOneDoctor = getOneDoctor;
