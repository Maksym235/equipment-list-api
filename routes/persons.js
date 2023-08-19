const express = require("express");
const router = express.Router();
const { validationBody, isValidId } = require("../middlewares");
const { schema } = require("../models/persons");
const { getAll, add, deletePersons } = require("../controllers/persons");
router.get("/", getAll);

router.post("/add", validationBody(schema.addPersonsSchema), add);

router.delete("/delete/:id", isValidId, deletePersons);

module.exports = router;
