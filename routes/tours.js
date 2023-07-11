const express = require("express");
const router = express.Router();
const { validationBody, authentication } = require("../middlewares");
const { Schema } = require("../models/tours");
const { addTour, addUserstoTour } = require("../controllers/tours");

router.post(
  "/add",
  authentication,
  validationBody(Schema.addTourSchema),
  addTour
);

router.post(
  "/:id/addUser",
  authentication,
  validationBody(Schema.addUserstoTourSchema),
  addUserstoTour
);

module.exports = router;
