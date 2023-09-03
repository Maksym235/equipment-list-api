const { EquipsListModel } = require("../../models/equipsList");

const getList = async (req, res) => {
  const { tourId } = req.body;

  const resp = await EquipsListModel.findOne({ tourId });
  res.json({
    code: 200,
    resp,
  });
};

module.exports = getList;
