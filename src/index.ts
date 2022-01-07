import express from "express";
import multer from "multer";
import { resolve, extname } from "path";
import * as mm from "music-metadata";

import multerConfig from "./config/multer";
import renameFile from "./utils/renameFile";

const app = express();

const upload = multer(multerConfig);

app.post("/", upload.single("song"), async (request, response) => {
  const file = request.file;

  if (!file) {
    return response.status(400).json({ error: "No File uploaded" });
  }

  const {
    common: { title, track },
  } = await mm.parseFile(resolve(__dirname, '..',"files", file.filename));

  const newName = track.no + ". " + title + extname(file.filename);
  const parsedName = newName.replace(/[^A-Za-z0-9\.]/g, "_");

  renameFile(file.filename, parsedName);

  return response.json({
    ...file,
    name: parsedName,
    filename: parsedName,
  });
});

app.listen(3333, () => console.log("Listening to port 3333"));
