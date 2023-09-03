const { EquipsListModel } = require("../../models/equipsList");
const { EquipModel } = require("../../models/equip");
const addDefaultList = async (req, res) => {
  const { id } = req.body;
  const defaultList = await EquipModel.find({});
  console.log(defaultList);
  const resp = await EquipsListModel.findByIdAndUpdate(id, {
    list: defaultList,
  });

  res.json({
    code: 200,
    resp,
  });
};

module.exports = addDefaultList;
