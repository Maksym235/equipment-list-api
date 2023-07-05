const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const personsRouter = require("./routes/persons");
const equipRouter = require("./routes/equip");
require("dotenv").config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/persons", personsRouter);
app.use("/equip", equipRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
