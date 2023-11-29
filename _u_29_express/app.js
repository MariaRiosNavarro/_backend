import express from "express";

const PORT = 9898;

//erstellen express app bzw anwendung

const app = express();

const cars = ["Porsche", "Ford", "seat"];

//anderung bei der ruten, bei htttp hatten ein handler gebaut

//neustart server alles weg

//Bodyparser um aus dem Request Body ein JS object zu machen
//Funktioniert nur by content-type: application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.end("Hello");
});

app.get("/about", (req, res) => {
  res.end("about");
});

// app.get("/cars", (req, res) => {
//   res.end("cars");
// });

app.get("/cars", (req, res) => {
  res.json(cars);
});

// Funktioniert nicht
// app.get("/cars", (req, res) => {
//   res.sendFile("static/cars.html");
// });

// app.post("/cars", (req, res) => {
//   res.end("more cars");
// });

// app.post("/cars", (req, res) => {
//   cars.push("BmW");
//   res.send();
// });

app.post("/cars", (req, res) => {
  const car = req.body;
  console.log(car);
  cars.push(car.hersteller);
  res.end();
});

//starten ist sehr ähnlich wie http module

app.listen(PORT, () =>
  console.log("Express läuft auf Port: http://localhost:" + PORT)
);
