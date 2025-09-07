import Registration from "../models/Registration.js";
import Student from "../models/Student.js";
import Event from "../models/Event.js";

export const registerStudent = async (req, res, next) => {
  try {
    const { studentId, eventId } = req.body;
    const registration = await Registration.create({ StudentId: studentId, EventId: eventId });
    res.status(201).json(registration);
  } catch (err) {
    next(err);
  }
};

export const markAttendance = async (req, res, next) => {
  try {
    const { id } = req.params; // use the ID from URL
    const registration = await Registration.findByPk(id);
    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }

    registration.attendance = true; // or you can use req.body.attendance if dynamic
    await registration.save();

    res.json(registration);
  } catch (err) {
    next(err);
  }
};

