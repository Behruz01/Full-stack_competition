"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnePatientInfo = exports.getCheckPaint = void 0;
const Inspection_1 = __importDefault(require("../../models/Inspection"));
const Patient_1 = __importDefault(require("../../models/Patient"));
const getCheckPaint = async (req, res, next) => {
    try {
        // const { doctorId } = req as CustomRequest;
        const doctorId = "64c8d8726bf500161d3114fb";
        const patients = await Inspection_1.default.find({ doctor: doctorId });
        const users = await Patient_1.default.find();
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
        // const { patientId } = req.params;
        const doctorId = "64c8d8726bf500161d3114fb";
        const patientId = "64c7b32987dce3b702f38fd8";
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
