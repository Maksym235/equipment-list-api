const { ToursModel } = require("../../models/tours");
const { HttpError } = require("../../helpers");

const addUserstoTour = async (req, res) => {
  const { id } = req.body;
  const { tourId } = req.params;
  //   const user = await ToursModel.findOne({});
  const resp = await ToursModel.findByIdAndUpdate(
    { _id: tourId },
    { $push: { users: id } },
    { new: true }
  );
  res.json({
    code: 200,
    resp,
  });
};

module.exports = addUserstoTour;
