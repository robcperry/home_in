const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  numberOfItems: {
    type: Number,
    required: true,
  },
  msrp: {
    type: String,
    required: true,
  },
  media: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
