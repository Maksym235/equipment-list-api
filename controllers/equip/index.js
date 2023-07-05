const { controlWrapper } = require("../../helpers");
const getAll = require("./GetAll");
const add = require("./add");
module.exports = {
  getAll: controlWrapper(getAll),
  add: controlWrapper(add),
};
