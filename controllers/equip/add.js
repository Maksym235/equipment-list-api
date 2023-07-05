const { EquipModel } = require("../../models/equip");

const add = async (req, res) => {
  const resp = await EquipModel.create(req.body);

  res.json({
    code: 201,
    message: `succesfully created`,
    resp,
  });
};

module.exports = add;
