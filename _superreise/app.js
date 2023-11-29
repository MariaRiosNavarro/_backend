import express from "express";
import { allPlanes, savePlane, setup } from "./utils/filestorage.js";

const PORT = 9999;
const app = express();

setup();

app.use(express.json());

//wir haben 2 ruten gemacht : eine lies andere hinzufugt. Wir werden in fs eine funktion machenund hier benutzen um ie sachen zu speichern

app.get("/api/planes", (req, res) => {
  allPlanes().then((planes) => res.json(planes));
});

app.post("/api/planes", (req, res) => {
  //neue Flugzeug speichern
  const plane = req.body;
  savePlane(plane);
  res.end();
});

app.listen(PORT, () => {
  console.log("Port is:" + PORT);
});
