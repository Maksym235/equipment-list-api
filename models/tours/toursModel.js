const { Schema, model } = require("mongoose");
const { mongooseError } = require("../../helpers");

const tours = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    users: {
      type: [{ type: Schema.Types.ObjectId, ref: "user" }],
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: false }
);
tours.post("save", mongooseError);

const ToursModel = model("tours", tours);

module.exports = ToursModel;
