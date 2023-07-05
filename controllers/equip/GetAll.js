const { EquipModel } = require("../../models/equip");

const getAll = async (req, res) => {
  const resp = await EquipModel.find();

  res.json({
    code: 200,
    resp,
  });
};

module.exports = getAll;
