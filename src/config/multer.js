const path = require("path");
const multer = require("multer");

return {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "files"),
    filename: (request, file, callback) => {
      return "music";
    },
  }),
};
