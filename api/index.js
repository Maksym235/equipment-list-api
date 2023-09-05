const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const http = require("http");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoose = require("mongoose");
const { DB_HOST } = process.env;
const personsRouter = require("./routes/persons");
const equipRouter = require("./routes/equip");
const equipsListRouter = require("./routes/equipsList");
const usersRouter = require("./routes/auth");
const toursRouter = require("./routes/tours");
const app = express();
mongoose.set("strictQuery", true);

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/persons", personsRouter);
app.use("/equip", equipRouter);
app.use("/equipsList", equipsListRouter);
app.use("/auth", usersRouter);
app.use("/tours", toursRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});


mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000, console.log("Server running. Use our API on port: 3000"));
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

module.exports = app;
