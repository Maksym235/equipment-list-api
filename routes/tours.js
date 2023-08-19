const express = require("express");
const router = express.Router();
const { validationBody, authentication } = require("../middlewares");
const { Schema } = require("../models/tours");
const { addTour, addUserstoTour } = require("../controllers/tours");

router.post("/add", validationBody(Schema.addTourSchema), addTour);

router.post(
  "/:id/addUser",
  validationBody(Schema.addUserstoTourSchema),
  addUserstoTour
);

module.exports = router;
