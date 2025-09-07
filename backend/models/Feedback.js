import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Registration from "./Registration.js";

const Feedback = sequelize.define("Feedback", {
  rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
  comment: { type: DataTypes.TEXT }
});

// Relation: Each feedback belongs to a registration
Registration.hasOne(Feedback);
Feedback.belongsTo(Registration);

export default Feedback;
