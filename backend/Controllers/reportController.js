import Event from "../models/Event.js";
import Student from "../models/Student.js";
import Registration from "../models/Registration.js";
import Feedback from "../models/Feedback.js";
import { Sequelize } from "sequelize";

// Event popularity
export const eventPopularity = async (req, res, next) => {
  try {
    const reports = await Registration.findAll({
      attributes: ["EventId", [Sequelize.fn("COUNT", Sequelize.col("StudentId")), "totalRegistrations"]],
      group: ["EventId"],
      order: [[Sequelize.literal("totalRegistrations"), "DESC"]],
      include: [{ model: Event }]
    });
    res.json(reports);
  } catch (err) {
    next(err);
  }
};

// Student participation
export const studentParticipation = async (req, res, next) => {
  try {
    const reports = await Registration.findAll({
      attributes: ["StudentId", [Sequelize.fn("COUNT", Sequelize.col("EventId")), "eventsAttended"]],
      where: { attendance: true },
      group: ["StudentId"],
      include: [{ model: Student }]
    });
    res.json(reports);
  } catch (err) {
    next(err);
  }
};
