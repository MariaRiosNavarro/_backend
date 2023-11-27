import http from "http";
import fs from "fs";

//Plan
//Get / -> index.html
//GET /<DATEINAME>.html_> dateiname.html

const sendFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.end("error", err);
      return;
    }
    //Frühre musste man das abgeben was für daten kommen,
    //jetzt wird fast alles erkannt in der neue version, aber svg brauch es

    if (path.includes(".svg")) {
      res.writeHead(200, { "Content-type": "image/svg+xml" });
    }
    res.end(data);
  });
};

const requestHandler = (req, res) => {
  console.log("Neue Request", req.url, req.method);

  if (req.url === "/") {
    sendFile("./assets/index.html", res);
  } else {
    const filePath = "./assets" + req.url;
    sendFile(filePath, res);
  }
};

const server = http.createServer(requestHandler);

server.listen(9898, () => console.log("Server an"));

// http status code https://de.wikipedia.org/wiki/HTTP-Statuscode

//die css wird auch gelesen
