// Importiere das HTTP-Modul
import http from "http";

// Importiere das File System-Modul
import fs from "fs";

// Definiere eine Funktion namens "sendFile", die eine Datei an den Client sendet
const sendFile = (path, res) => {
  // Lese den Inhalt der Datei am angegebenen Pfad
  fs.readFile(path, (err, data) => {
    // Überprüfe auf Fehler beim Lesen der Datei
    if (err) {
      // Wenn ein Fehler auftritt, sende einen HTTP-Statuscode 500 (Interner Serverfehler)
      res.writeHead(500);
      // Sende eine Fehlermeldung an den Client
      res.end("Fehler beim Empfangen der Daten", err);
      // Beende die Funktion vorzeitig
      return;
    }
    // Wenn kein Fehler auftritt, sende den Inhalt der Datei an den Client
    res.end(data);
  });
};

// Definiere eine Funktion namens "requestHandler" für die Verarbeitung von HTTP-Anfragen
const requestHandler = (req, res) => {
  // Gib eine Nachricht in der Konsole aus, wenn eine neue Anfrage eingeht
  console.log("Eine neue Anfrage", req.url, req.method);

  // Überprüfe die URL der Anfrage und handle sie entsprechend
  if (req.url === "/") {
    // Wenn die URL "/" ist, sende die index.html-Datei
    sendFile("./assets/index.html", res);
  } else if (req.url === "/about") {
    // Wenn die URL "/about" ist, sende die about.html-Datei
    sendFile("./assets/about.html", res);
  } else if (req.url === "/contact") {
    // Wenn die URL "/contact" ist, sende die contact.html-Datei
    sendFile("./assets/contact.html", res);
  } else if (req.url === "/faq") {
    // Wenn die URL "/faq" ist, sende die faq.html-Datei
    sendFile("./assets/faq.html", res);
  } else if (req.url === "/main.css") {
    // Wenn die URL "/main.css" ist, sende die main.css-Datei
    sendFile("./assets/main.css", res);
  } else {
    // Wenn keine passende URL gefunden wird, beende die Verbindung
    res.end();
  }
};

// Erstelle einen HTTP-Server und weise ihm die "requestHandler"-Funktion zu
const server = http.createServer(requestHandler);

// Lausche auf dem Port 9899 und gib eine Nachricht aus, wenn der Server gestartet ist
server.listen(9899, () => console.log("Server läuft"));
