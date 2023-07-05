const { PersonsModel } = require("../../models/persons");

const getAll = async (req, res) => {
  const resp = await PersonsModel.find();
  console.log(resp);
  res.json({
    code: 200,
    resp,
  });
};

module.exports = getAll;
