const { usersModel } = require("../../models/users");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await usersModel.findOne({ email: email });
  if (user) {
    throw HttpError(409, "user already exists");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = {
    ...req.body,
    password: hashPassword,
  };
  const resp = await usersModel.create(newUser);
  res.json({
    code: 201,
    message: "registered successfully",
    user: {
      name: resp.name,
      email: resp.email,
      id: resp._id,
    },
  });
};

module.exports = register;
