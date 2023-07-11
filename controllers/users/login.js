const { usersModel } = require("../../models/users");
const { HttpError } = require("../../helpers");
const { JWT_SECRET } = process.env;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await usersModel.findOne({ email });
  console.log(user);
  if (!user) {
    throw HttpError(404, "User not found");
  }
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    throw HttpError(400, "Invalid password or email");
  }
  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
  await usersModel.findByIdAndUpdate(user.id, { token });

  res.json({
    code: 200,
    message: "Login successful",
    token,
  });
};

module.exports = login;
