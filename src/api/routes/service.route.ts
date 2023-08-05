import { Router } from "express";
import {
  createService,
  getServices,
  updateService,
  deleteService,
  getOneService,
} from "../controllers/sevice.controller";
import { isAdmin } from "../middlewares/isAdmin";
import { isAuth } from "../middlewares/isAuth";
const router = Router();

router.post("/service", isAuth, isAdmin, createService);
router.get("/service", getServices);
router.put("/service/:id", isAuth, isAdmin, updateService);
router.delete("/service/:id", isAuth, isAdmin, deleteService);
router.get("/service/:id", getOneService);

export default router;
