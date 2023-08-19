const { controlWrapper } = require("../../helpers");
const getAll = require("./getAll");
const add = require("./add");
const deletePersons = require("./delete");
module.exports = {
  getAll: controlWrapper(getAll),
  add: controlWrapper(add),
  deletePersons: controlWrapper(deletePersons),
};
