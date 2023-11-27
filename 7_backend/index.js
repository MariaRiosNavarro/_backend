import http from "http";
import fs from "fs";

const sendFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      // res.writeHead(500);
      res.end("Fehler beim Empfangen der Daten", err);
      return;
    }
    if (path.includes(".svg")) {
      res.writeHead(200, { "Content-type": "image/svg+xml" });
    }
    res.end(data);
  });
};

const requestHandler = (req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    sendFile("./assets/index.html", res);
  } else if (req.url === "/about") {
    sendFile("./assets/about.html", res);
  } else if (req.url === "/contact") {
    sendFile("./assets/contact.html", res);
  } else if (req.url === "/faq") {
    sendFile("./assets/faq.html", res);
  } else if (req.url === "/main.css") {
    sendFile("./assets/main.css", res);
  } else if (req.url.endsWith(".svg")) {
    const filePath = "./assets" + req.url;
    sendFile(filePath, res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
};

const server = http.createServer(requestHandler);

server.listen(9999, () => console.log("Server works"));
