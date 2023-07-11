const { controlWrapper } = require("../../helpers");
const addTour = require("./add");
const addUserstoTour = require('./addUsers')
module.exports = {
    addTour: controlWrapper(addTour),
    addUserstoTour: controlWrapper(addUserstoTour)
};
