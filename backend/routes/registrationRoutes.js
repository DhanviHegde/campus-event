import express from "express";
import { registerStudent, markAttendance } from "../Controllers/registrationController.js";

const router = express.Router();

router.post("/", registerStudent);
router.patch("/:id/attendance", markAttendance);

export default router;
