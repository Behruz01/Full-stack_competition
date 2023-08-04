"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.theNextInspection = exports.createInspection = exports.getOnePatientInfo = exports.getCheckPaint = void 0;
const Inspection_1 = __importDefault(require("../../models/Inspection"));
const getCheckPaint = async (req, res, next) => {
    try {
        // const { doctorId } = req as CustomRequest;
        const doctorId = "64c8d8726bf500161d3114fb";
        const patients = await Inspection_1.default.find({ doctor: doctorId }).sort({
            createdAt: "asc",
        });
        res.status(200).json({ patients });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
};
exports.getCheckPaint = getCheckPaint;
//
const getOnePatientInfo = async (req, res, next) => {
    try {
        // const { doctorId } = req as CustomRequest;
        const { patientId } = req.params;
        const doctorId = "64c8d8726bf500161d3114fb";
        const inspections = await Inspection_1.default.find({
            $and: [{ patient: patientId }, { doctor: doctorId }],
        });
        res.status(200).json({ inspections });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
};
exports.getOnePatientInfo = getOnePatientInfo;
// create inspection and image
const createInspection = async (req, res, next) => {
    try {
        // const { doctorId } = req as CustomRequest;
        const { inspectionId } = req.params;
        const doctorId = "64c8d8726bf500161d3114fb";
        const { image } = req.imageName || {};
        const { inspection_desc } = req.body;
        const inspections = await Inspection_1.default.findByIdAndUpdate(inspectionId, {
            $set: {
                inspection_desc,
                inspection_image: image,
                inspection_status: "checked",
            },
        });
        res.status(200).json({ message: "Tashxis qo'yildi" });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
};
exports.createInspection = createInspection;
// the next one
const theNextInspection = async (req, res, next) => {
    try {
        // const { doctorId } = req as CustomRequest;
        const doctorId = "64c8d8726bf500161d3114fb";
        const { image } = req.imageName || {};
        const inspections = (await Inspection_1.default.find({ inspection_status: "pending" }))[0];
        res.status(200).json({ data: inspections });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
};
exports.theNextInspection = theNextInspection;
