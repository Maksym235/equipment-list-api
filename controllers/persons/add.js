const { PersonsModel } = require("../../models/persons");

const add = async (req, res) => {
  const resp = await PersonsModel.create(req.body);
  res.json({
    code: 201,
    message: "Persons created successfully",
    resp,
  });
};

module.exports = add;
