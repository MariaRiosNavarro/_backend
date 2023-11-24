import { createIfNotExist } from "./function.js";
import fs from "fs";

const pathFolder = "./newFolder";

fs.mkdir(pathFolder, { recursive: true }, (err) => {
  if (err) {
    console.log("Create Folder Issue: ", err);
  } else {
    console.log("Folder created");
    createIfNotExist(pathFolder, "hallo");
    createIfNotExist(pathFolder, "other");
  }
});

createIfNotExist("./", "another test");
