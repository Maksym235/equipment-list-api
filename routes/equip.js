const express = require("express");
const router = express.Router();
const { getAll, add } = require("../controllers/equip");
const { schema } = require("../models/equip");
const { validationBody } = require("../middlewares");
router.get("/", getAll);

router.post("/add", validationBody(schema.addEquipSchema), add);

module.exports = router;
