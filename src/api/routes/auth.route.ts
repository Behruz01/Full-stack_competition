import { Router } from "express";
import { doctorLogin, patientLogin } from "../controllers/login.controller";

import { registerController } from "../controllers/register.controller";
const router = Router();

router.post("/register", registerController);
router.post("/login", patientLogin);
router.post("/loginDoctor", doctorLogin);

export default router;
