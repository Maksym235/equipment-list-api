const express = require("express");
const router = express.Router();
const { validationBody } = require("../middlewares");
const { schema } = require("../models/persons");
const { getAll, add } = require("../controllers/persons");
router.get("/", getAll);

router.post("/add", validationBody(schema.addPersonsSchema), add);

module.exports = router;
