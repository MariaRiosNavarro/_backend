import { error } from "console";
import { data } from "./data.json";
import fs from "fs";

const path = "./data.txt";

data.forEach((element) => {
  fs.writeFile(
    path,
    element.id + element.title + "\n" + element.description + "\n",
    { flag: "a" },
    (error) => {
      if (error) {
        console.log("create file error:", error);
      } else {
        console.log("file created: " + element.id);
      }
    }
  );
});
