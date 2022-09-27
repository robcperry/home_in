const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    required: true,
  },
  roomItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'items'
  }],

});

module.exports = mongoose.model("Room", RoomSchema);
