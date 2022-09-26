const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  roomName: {
    type: String,
    required: true,
  },
  roomItems: {
    type: Array,
    required: true,
  },
  dateOfPurchase: {
    type: String,
    required: true,
  },

  retailer:{
    type: String,
    required: true,
  },

  modelNumber:{
    type: String,
    required:true,

  },
  warranty:{

    type: String,
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
