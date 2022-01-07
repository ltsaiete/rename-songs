/**
 * Terei os files armazenados numa pasta
 * Pegar umm file
 * Ler a estrutura desse file
 * rename do file
 */

const express = require("express");
const multer = require("multer");
const { resolve, extname } = require("path");
const crypto = require("crypto");
const util = require("util");
const fs = require("fs");
const mm = require("music-metadata");

const storage = multer.diskStorage({
  destination: resolve(__dirname, "files"),
  filename: function (req, file, cb) {
    const hash = crypto.randomBytes(16).toString("hex");
    file.name = hash + extname(file.originalname);
    cb(null, file.name);
  },
});

const upload = multer({ storage: storage });

const app = express();

app.post("/", upload.array("files"), async (request, response) => {
  const files = request.files;

  files.map(async (file) => {
    const {
      common: { title, track },
    } = await mm.parseFile(resolve(__dirname, "files", file.filename));

    const newName = track.no + ". " + title + extname(file.filename);
    const parsedName = newName.replace(/[^A-Za-z0-9\.]/g, "_");

    fs.rename(
      resolve(__dirname, "files", file.filename),
      resolve(__dirname, "files", parsedName),
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("renamed");
        }
      }
    );
  });

  return response.json(files);
});

app.listen(3333, () => console.log("Listening to port 3333"));
