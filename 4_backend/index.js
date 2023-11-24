import { log } from "console";
import fs from "fs";

// Filesystem-Level-1_1

const text = "Hello Word";

fs.writeFile("./blog1.txt", text, (err) => {
  if (err) {
    console.log("write error", err);
    return;
  } else {
    console.log("Written to file successfully");
  }
});

const newText = "Ich bin ein Webdeveloper";

fs.writeFile("./blog1.txt", newText, (err) => {
  if (err) {
    console.log("rewrite error", err);
    return;
  } else {
    console.log("Change to file successfully");
  }
});

const otherText = "andere Text";

fs.writeFile("./blog2.txt", otherText, (err) => {
  if (err) {
    console.log("write error blog2", err);
    return;
  } else {
    console.log("Written to file blog2 successfully");
  }
});

//Überprüfe, ob der Ordner "assets" bereits existiert.
// Falls ja, lösche diesen.Erstelle einen neuen Ordner "assets".

const path = "./assets";

if (fs.existsSync(path)) {
  fs.rm(path, { recursive: true }, (err) => {
    if (err) {
      console.log("Folder delete error: ", err);
      return;
    }
  });
  console.log("Folder Deleted Successfully!");
} else {
  fs.mkdir(path, { recursive: true }, (err) => {
    if (err) {
      console.log("creating folder error: ", err);
      return;
    } else {
      console.log("Folder created");
    }
  });
}

//Überprüfe, ob die Datei "delete.txt" bereits existiert. Falls ja, lösche diese.
//Falls ja, lösche diese.

const file = "./delete.txt";
const fileText = "Delete me";

if (fs.existsSync(file)) {
  fs.unlink(file, (err) => {
    if (err) {
      console.log("File delete error: ", err);
      return;
    }
  });
  console.log("File Deleted Successfully!");
} else {
  fs.writeFile(file, fileText, (err) => {
    if (err) {
      console.log("creating file error: ", err);
      return;
    } else {
      console.log("file created");
    }
  });
}

//Erstelle eine Datei namens "Hello.txt" und trage dort einen beliebigen Text ein. Benenne die Datei anschließend in "HelloWorld.txt" um.

const filePath = "./Hello.txt";
const newPath = "./HelloWorld.txt";
const textFile = "Irgendein Text";

fs.writeFile(filePath, textFile, (err) => {
  if (err) {
    console.log("create file issue: ", err);
    return;
  } else {
    console.log("New File created");
  }
});

//rename

fs.rename(filePath, newPath, (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("rename file");
  }
});
