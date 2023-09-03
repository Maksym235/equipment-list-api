const { ToursModel } = require("../../models/tours");
const { HttpError } = require("../../helpers");
const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const resp = await ToursModel.find({ owner });
  res.json({
    code: 200,
    resp,
  });
};

module.exports = getAll;
