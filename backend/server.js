import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/db.js";

dotenv.config(); // Load env variables

// Routes
import eventRoutes from "./routes/eventRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import feedbackRoutes from "./routes/feedBackRoutes.js";

// Middlewares
import { errorHandler } from "./middlewares/errorHandler.js";

// Models (ensure they are registered with Sequelize)
import "./models/Event.js";
import "./models/Student.js";
import "./models/Registration.js";
import "./models/Feedback.js";

const app = express();
app.use(express.json());
app.use(cors()); // allow frontend to call API

// API Routes
app.use("/api/events", eventRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/registrations", registrationRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/feedbacks", feedbackRoutes);


// Health check
app.get("/", (req, res) => {
  res.send("Campus Event API is running 🚀");
});

// Error handler (must be after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Connect to DB and start server
sequelize
  .sync({ alter: true }) // ⚠️ remove { alter: true } in production
  .then(() => {
    console.log("✅ Database synced");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Failed to sync database:", err.message);
    process.exit(1);
  });
