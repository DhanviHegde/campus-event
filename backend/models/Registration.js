import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Student from "./Student.js";
import Event from "./Event.js";

const Registration = sequelize.define("Registration", {
  attendance: { type: DataTypes.BOOLEAN, defaultValue: false }
});

// Many-to-many setup
Student.belongsToMany(Event, { through: Registration });
Event.belongsToMany(Student, { through: Registration });

// ⚠ Direct associations for easier includes in queries
Registration.belongsTo(Student);
Registration.belongsTo(Event);
Student.hasMany(Registration);
Event.hasMany(Registration);

export default Registration;
