const { controlWrapper } = require("../../helpers");
const getAll = require('./getAll')
const addTour = require("./add");
const addUserstoTour = require('./addUsers')
module.exports = {
    getAllTours: controlWrapper(getAll),
    addTour: controlWrapper(addTour),
    addUserstoTour: controlWrapper(addUserstoTour)
};
