import http from "http";

const requestHandler = (req, res) => {
  console.log("URL", req.url);
  console.log("Methode", req.method);
  // Methoden:
  // GET - gibt mir die resouerce
  // POST - erstelle neue resource
  // PUT - aktuelisiere existierende resources
  // DELETE - losche resources

  //Header configuracion, Body- Daten oder Payload

  if (req.url === "/") {
    res.end("MainPage");
    return;
  } else if (req.url === "/about") {
    res.end("Das sind wir");
  } else {
    res.writeHead(404);
    res.end("Page not Found");
  }
};

const server = http.createServer(requestHandler);

server.listen(9898, () => console.log("Ich stehe hinter der Tür: 9898"));
