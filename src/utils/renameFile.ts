// This is actually de core of the whole thing hehe
import { rename } from "fs";
import { resolve } from "path";

function renameFile(oldName: string, newName: string) {
  rename(
    resolve(__dirname, "files", oldName),
    resolve(__dirname, "files", newName),
    (err) => {
      if (err) console.log(err);
    }
  );
}

export default renameFile;
