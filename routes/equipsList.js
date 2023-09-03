const express = require("express");
const router = express.Router();
const {
  createList,
  addDefaultList,
  getList,
} = require("../controllers/equipsList");
router.get("/", getList);

router.post("/create", createList);

router.post("/default", addDefaultList);

module.exports = router;
