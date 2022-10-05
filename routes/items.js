const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const itemController = require("../controllers/items");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.get("/additem", itemController.addItem)

/*router.get("/:id", ensureAuth, itemController.getItem);

router.post("/createItem", upload.single("file"), itemController.createItem);

//router.put("/likePost/:id", postsController.likePost);

router.delete("/deleteItem/:id", itemController.deleteItem);*/

module.exports = router;
