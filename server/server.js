const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("TaskFlow Backend is Running 🚀");
});

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});