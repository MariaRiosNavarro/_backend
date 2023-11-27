import http from "http";

const requestHandler = (req, res) => {
  res.end("Hello Back");
};

const server = http.createServer(requestHandler);

server.listen(9898, () => console.log("Ich stehe hinter der Tür: 9898"));
