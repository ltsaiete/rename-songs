import { resolve, extname } from "path";
import { diskStorage } from "multer";
import crypto from "crypto";

export default {
  storage: diskStorage({
    destination: resolve(__dirname, "..", "files"),
    filename: function (req, file: any, cb) {
      const hash = crypto.randomBytes(16).toString("hex");
      file.name = hash + extname(file.originalname);
      cb(null, file.name);
    },
  }),
};
