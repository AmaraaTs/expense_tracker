const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { logger } = require("./middlewares/logger");
dotenv.config();
const app = express();

const authRoutes = require("./routes/auto-route");
const userRoutes = require("./routes/user-route");
const categoryRoutes = require("./routes/category-route");
const recordRoutes = require("./routes/record-route");

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/records", recordRoutes);

app.get("/", (_, res) => {
  res.send("Welcome Expense Tracker API");
});

app.listen(PORT, () => {
  console.log(`Сервер localhost:${PORT} дээр аслаа`);
});
