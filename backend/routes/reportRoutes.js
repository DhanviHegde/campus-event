import express from "express";
import { eventPopularity, studentParticipation } from "../Controllers/reportController.js";

const router = express.Router();

router.get("/events", eventPopularity);
router.get("/students", studentParticipation);

export default router;
