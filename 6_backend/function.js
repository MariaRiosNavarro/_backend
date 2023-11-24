import fs from "fs";

export const createIfNotExist = (path, content) => {
  const contentPath = content.split(" ").join("_");
  fs.writeFile(
    `${path}/${contentPath}.txt`,
    content + "\n",
    { flag: "a" },
    (err) => {
      if (err) {
        console.log("Create Issue of" + content, "error is" + err);
      } else {
        console.log("Content Created");
      }
    }
  );
};
