const Joi = require("joi");

const addTourSchema = Joi.object({
  name: Joi.string().required(),
  users: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
    })
  ),
});

const addUserstoTourSchema = Joi.object({
  id: Joi.string().required(),
});

const Schema = {
  addTourSchema,
  addUserstoTourSchema,
};

module.exports = Schema;
