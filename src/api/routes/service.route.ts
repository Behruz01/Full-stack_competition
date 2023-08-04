import { Router } from "express";
import {
  createService,
  getServices,
  updateService,
  deleteService,
  getOneService,
} from "../controllers/sevice.controller";
const router = Router();

router.post("/service", createService);
router.get("/service", getServices);
router.put("/service/:id", updateService);
router.delete("/service/:id", deleteService);
router.get("/service/:id", getOneService);

export default router;
