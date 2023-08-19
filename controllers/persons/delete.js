const { PersonsModel } = require("../../models/persons");

const deletePersons = async (req, res) => {
  const { id } = req.params;
  await PersonsModel.findByIdAndDelete(id);
  res.json({
    code: 200,
    message: `Successfully deleted`,
  });
};

module.exports = deletePersons;
