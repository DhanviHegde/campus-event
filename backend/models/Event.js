import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Event = sequelize.define("Event", {
  title: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.ENUM("Hackathon", "Workshop", "Tech Talk", "Fest"), allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  createdBy: { type: DataTypes.STRING, allowNull: false }
});

export default Event;
