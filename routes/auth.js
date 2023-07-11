const express = require("express");
const router = express.Router();
const { register, login, logout, current } = require("../controllers/users");
const { authentication, validationBody } = require("../middlewares");
const { Schema } = require("../models/users");

router.post("/register", validationBody(Schema.register), register);

router.post("/login", validationBody(Schema.login), login);

router.get("/current", authentication, current);

router.post("/logout", authentication, logout);

module.exports = router;
