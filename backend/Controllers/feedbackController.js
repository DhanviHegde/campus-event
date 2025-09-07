// controllers/feedbackController.js
import Feedback from "../models/Feedback.js";
import Student from "../models/Student.js";
import Event from "../models/Event.js";

export const submitFeedback = async (req, res, next) => {
  try {
    const { studentId, eventId, rating, comment } = req.body;

    // Check if student exists
    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Check if event exists
    const event = await Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Create feedback
    const feedback = await Feedback.create({
      StudentId: studentId,
      EventId: eventId,
      rating,
      comment,
    });

    res.status(201).json(feedback);
  } catch (err) {
    next(err);
  }
};
