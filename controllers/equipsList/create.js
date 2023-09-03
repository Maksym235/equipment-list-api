const { EquipsListModel } = require("../../models/equipsList");

const createList = async (req, res) => {
  const { tourId } = req.body;
  const newList = {
    tourId,
    list: [],
  };
  const resp = await EquipsListModel.create(newList);
  res.json({
    code: 201,
    resp,
  });
};

module.exports = createList;
