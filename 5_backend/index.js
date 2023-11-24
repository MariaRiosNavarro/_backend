import data from "./data.json" assert { type: "json" };
import fs from "fs";

const path = "./data.txt";

data.forEach((element) => {
  fs.writeFile(
    path,
    String(element.id) +
      " - " +
      String(element.title) +
      "\n" +
      String(element.description) +
      "\n\n",
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
