"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sevice_controller_1 = require("../controllers/sevice.controller");
const router = (0, express_1.Router)();
router.post("/service", sevice_controller_1.createService);
router.get("/service", sevice_controller_1.getServices);
router.put("/service/:id", sevice_controller_1.updateService);
router.delete("/service/:id", sevice_controller_1.deleteService);
router.get("/service/:id", sevice_controller_1.getOneService);
exports.default = router;