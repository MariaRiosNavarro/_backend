import http from "http";
import fs from "fs";

const sendFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Error to recive data", err);
      return;
    }
    res.end(data);
  });
};

const requestHandler = (req, res) => {
  console.log("One New Request", req.url, req.method);
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
  } else {
    res.end();
  }
};

const server = http.createServer(requestHandler);
server.listen(9899, () => console.log("Server works"));
