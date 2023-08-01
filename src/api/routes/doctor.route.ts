import { Router } from "express";
import {
  createDoctor,
  deleteDoctor,
  getAllDoctor,
  getOneDoctor,
  updateDoctor,
} from "../controllers/doctor.controller";
import { fileUpload } from "../middlewares/fileUpload";
const router = Router();

router.post("/doctors", fileUpload, createDoctor);
router.get("/doctors", getAllDoctor);
router.put("/doctor/:id", updateDoctor);
router.delete("/doctor/:id", deleteDoctor);
router.get("/doctor/:id", getOneDoctor);

export default router;
