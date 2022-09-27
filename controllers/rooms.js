const Item = require('../models/Items')

module.exports = {
  getAllRooms: async (req, res) => {
    try{
      //get all rooms
      const rooms = await Room.find({ userId: req.user.id })
      res.render('rooms.ejs', { rooms, user: req.user })
    } catch (err) {
      console.log(err)
    }
  },

  getRoom: async (req, res) => {
    try {
      // get room by id
      const room = await Room.findById(req.params.id)

      // get all items that belong to that room
      const roomItems = await Item.find({ roomId: req.params.id })

      res.render('room.ejs', {
        roomName: room.name,
        roomId: room._id,
        items: roomItems,
        user: req.user,
      })
    } catch (err) {
      console.log(err)
    }
  },

  createRoom: async (req, res) => {
    try {
      let newRoom = await Room.create({
        name: req.body.name,
        userId: req.user.id,
      })
      console.log('Room has been added!')
      res.redirect('/rooms/' + newRoom._id)
    } catch (err) {
      console.log(err)
    }
  }, 

  deleteRoom: async (req, res) => {
    try {
      await Room.findOneAndDelete({ _id: req.body.itemIdFromJSFile })
      console.log('Deleted Room')
      res.json('Deleted It')
    } catch (err) {
      console.log(err)
    }
  },