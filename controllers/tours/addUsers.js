const { ToursModel } = require("../../models/tours");
const { HttpError } = require("../../helpers");

const addUserstoTour = async (req, res) => {
  const { _id: ownerId } = req.user;
  const { usersId } = req.body;
  const { id } = req.params;

  const isUserOwner = await ToursModel.find({ _id: id });
  console.log(isUserOwner);
  if (String(isUserOwner[0].owner) !== String(ownerId)) {
    console.log(ownerId);
    console.log(isUserOwner[0].owner);
    throw HttpError(400, "You can`t add persons to tour");
  }

  //   const user = await ToursModel.findOne({});

  const resp = await ToursModel.findByIdAndUpdate(
    { _id: id },
    { $push: { users: usersId } },
    { new: true }
  );
  res.json({
    code: 200,
    resp,
  });
};

module.exports = addUserstoTour;
