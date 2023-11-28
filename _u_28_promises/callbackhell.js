//dateien einzeln speichern von adresses

import { log } from "console";
import fs from "fs";

fs.readFile("./adresses.csv", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const addresses = data.split(";");
  console.log("hey", addresses);

  addresses.forEach((address) => {
    fetch(address)
      .then((response) => response.text())
      .then((page) => {
        address = address.slice(0, -3);
        console.log(address);
        fs.writeFile(address + ".html", page, () => {
          let header = page.split("<h1");
          header = header[1]?.split("h1>");
          console.log(header);
          fs.writeFile("./headers", header[0], { flag: "a" }, () => {
            fetch("https://www.unserdashboasd.de", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ message: "neue Header" }),
            }).then((response) => console.log("irgendwas"));
          });

          console.log("hier");
        });
      });
  });
  // res.end(data);
});
