const { Schema, model } = require("mongoose");
const { mongooseError } = require("../../helpers");

const users = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

users.post("save", mongooseError);

const usersModel = model("users", users);

module.exports = usersModel;
