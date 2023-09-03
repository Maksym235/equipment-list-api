const { controlWrapper } = require("../../helpers");
const createList = require("./create");
const addDefaultList = require("./addListEquips");
const getList = require("./getList");
module.exports = {
  createList: controlWrapper(createList),
  addDefaultList: controlWrapper(addDefaultList),
  getList: controlWrapper(getList),
};
