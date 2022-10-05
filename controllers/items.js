const cloudinary = require("../middleware/cloudinary");
const Item = require("../models/Item");
const Comment = require("../models/Comment");

module.exports = {
  
  getItem: async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      const comments = await Comment.find({post: req.params.id}).sort({ createdAt: "desc" }).lean();
      res.render("post.ejs", { post: post, user: req.user, comments: comments });
    } catch (err) {
      console.log(err);
    }
  },

  addItem: async(req, res)=>{

    try {
      const item = await Item.findById(req.params.id);
      res.render("additem.ejs", {user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
    
  createItem: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Item.create({
        itemName: req.body.name,
        room: req.body.room,
        dateOfPurchase: req.body.purDate,
        retailer:req.body.retailer,
        modelNumber: req.body.modelNum,
        warranty:req.body.warranty,
        msrp: req.body.cost,
        media: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        user: req.user.id,
      });
      console.log("item has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
   /*deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },*/
};
