const { usersModel } = require("../../models/users");

const logout = async (req, res) => {
  const { id } = req.user;
  await usersModel.findByIdAndUpdate(id, { token: "" });
  res.json({
    code: 200,
    message: "Logout successfully",
  });
};

module.exports = logout;
