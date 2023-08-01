import { Router } from "express";
import { createClinic, deleteClinic, getClinics, getOneClinic, updateClinic } from "../controllers/clinic.controller";
import { fileUpload } from "../middlewares/fileUpload";
const router = Router();

router.post("/clinics", fileUpload, createClinic);
router.get("/clinics", getClinics);
router.put("/clinics/:id", updateClinic);
router.delete("/clinics/:id", deleteClinic);
router.get("/clinics/:id", getOneClinic);


export default router;
