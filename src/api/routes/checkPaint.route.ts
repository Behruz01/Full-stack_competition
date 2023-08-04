import { Router } from "express";
import {
  getCheckPaint,
  getOnePatientInfo,
} from "../controllers/checkPatient.controller";
const router = Router();

// router.post("/clinics", fileUpload, createClinic);
router.get("/checkpaints", getCheckPaint);
// router.put("/clinics/:id", updateClinic);
// router.delete("/clinics/:id", deleteClinic);
router.get("/patientinfo/:patientId", getOnePatientInfo);

export default router;
