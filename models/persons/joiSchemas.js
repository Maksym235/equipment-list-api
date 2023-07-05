const joi = require("joi");

const addPersonsSchema = joi.object({
  name: joi.string().required(),
  color: joi.string(),
});

const schema = {
  addPersonsSchema,
};

module.exports = schema;
