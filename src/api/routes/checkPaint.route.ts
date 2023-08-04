import { Router } from "express";
import {
  createInspection,
  getCheckPaint,
  getOnePatientInfo,
  theNextInspection,
} from "../controllers/checkPatient.controller";
const router = Router();

router.post("/nextinspection", theNextInspection);
router.get("/checkpaints", getCheckPaint);
router.put("/inspection/:inspectionId", createInspection);
router.get("/patientinfo/:patientId", getOnePatientInfo);

export default router;
