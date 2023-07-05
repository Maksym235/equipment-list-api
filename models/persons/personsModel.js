const { model, Schema } = require("mongoose");
const persons = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 10,
    },
    color: {
      type: String,
      default: "#000",
    },
  },
  { versionKey: false, timestamps: true }
);
const PersonsModel = model("persons", persons);

module.exports = PersonsModel;
