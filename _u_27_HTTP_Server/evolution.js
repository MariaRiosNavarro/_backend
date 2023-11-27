import http from "http";
import fs from "fs";

const sendFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Kaputt", err);
      return;
    }
    res.end(data);
  });
};

const requestHandler = (req, res) => {
  console.log("Ein neuer Request", req.url, req.method);

  if (req.url === "/") {
    //sende index.html
    sendFile("./assets/index.html", res);
  } else if (req.url === "/about") {
    sendFile("./assets/about.html", res);
  }
};

const server = http.createServer(requestHandler);

server.listen(9898, () => console.log("Server an"));

//anderung draussen in ein log so wir hier console.log("Test") brauchen
// ein server neu start, aber die änderungen in der funktion
// ist in der handler und wir die änderungen in der neuen
// request macht ein neue lesen der datei

console.log("Test");
