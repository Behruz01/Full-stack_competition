"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const queue_controller_1 = require("../controllers/queue.controller");
const router = (0, express_1.Router)();
router.post("/queue/:id", queue_controller_1.createQueue);
router.get("/queue/:id", queue_controller_1.getQueue);
// router.put("/service/:id", updateService);
// router.delete("/service/:id", deleteService);
// router.get("/service/:id", getOneService);
exports.default = router;
