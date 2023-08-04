import { Router } from "express";
import { createQueue, getQueue } from "../controllers/queue.controller";
const router = Router();

router.post("/queue/:id", createQueue);
router.get("/queue/:id", getQueue);
// router.put("/service/:id", updateService);
// router.delete("/service/:id", deleteService);
// router.get("/service/:id", getOneService);

export default router;
