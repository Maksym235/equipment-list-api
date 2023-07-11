const { ToursModel } = require("../../models/tours");
const { HttpError } = require("../../helpers");

const addTour = async (req, res) => {
  const { name } = req.body;
  const { _id: user } = req.user;
  const users = [user];
  const tour = await ToursModel.findOne({ name: name });
  if (tour) {
    throw HttpError(400, "tour already exists");
  }
  const resp = await ToursModel.create({ ...req.body, users, owner: user });

  res.json({
    code: 201,
    resp,
  });
};

module.exports = addTour;
