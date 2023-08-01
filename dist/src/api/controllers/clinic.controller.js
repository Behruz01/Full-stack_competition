"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneClinic = exports.deleteClinic = exports.updateClinic = exports.getClinics = exports.createClinic = void 0;
const Clinic_1 = __importDefault(require("../../models/Clinic"));
const createClinic = async (req, res, next) => {
    try {
        const { clinic_name, clinic_about, clinic_address, call_center } = req.body;
        const { imageName } = req;
        Clinic_1.default.create({
            clinic_name,
            clinic_about,
            clinic_address,
            call_center,
            clinic_image: imageName,
        });
        res.status(201).json({ message: "Clinic created successfully" });
    }
    catch (error) {
        next(error);
    }
};
exports.createClinic = createClinic;
// get all
const getClinics = async (req, res, next) => {
    try {
        const data = await Clinic_1.default.find();
        res.status(200).json({ data: data });
    }
    catch (error) {
        next(error);
    }
};
exports.getClinics = getClinics;
// update clinic
const updateClinic = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { clinic_name, clinic_about, clinic_address, call_center } = req.body;
        const { imageName } = req;
        await Clinic_1.default.findByIdAndUpdate(id, {
            $set: {
                clinic_name,
                clinic_about,
                clinic_address,
                call_center,
                clinic_image: imageName,
            },
        });
        res.status(200).json({ message: "Updated successfully" });
    }
    catch (error) {
        next(error);
    }
};
exports.updateClinic = updateClinic;
// delete clinic
const deleteClinic = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Clinic_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: "Deleted clinic" });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteClinic = deleteClinic;
// get one clinic
const getOneClinic = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await Clinic_1.default.findById(id)
            .populate("doctor_clinic_address")
            .exec();
        res.status(200).json({ data: data });
    }
    catch (error) {
        console.log(error);
        next(Error);
    }
};
exports.getOneClinic = getOneClinic;
