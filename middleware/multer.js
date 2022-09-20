const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    // added  .mp4 && .mov file ext for video upload 9/18/2022
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".mp4" && ext !== ".mov") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
