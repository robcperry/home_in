const express = require('express')
const router = express.Router()
const roomsController = require('..controllers/rooms')
const {ensureAuth} =require('../middleware/auth')

router.get('/', ensureAuth, roomsController.getAllRooms)
router.get('/:id',ensureAuth, roomsController.getRoom)
router.get('/createRoom',ensureAuth, roomsController.createRoom)
router.delete('/deleteRoom',ensureAuth, roomsController.deleteRoom)
router.post('/addItem,/:id', ensureAuth, roomsController.addItem)
router.delete('/deleteItem', ensureAuth, roomsController.deleteItem)

modules.exports = router