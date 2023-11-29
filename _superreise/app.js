import express from "express";
import {
  allPlanes,
  savePlane,
  setup,
  getOnePlane,
  updateOnePlane,
  deletePlane,
} from "./utils/filestorage.js";

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

//# 1 flugzeug zeigen

app.get("/api/planes/:id", (req, res) => {
  const planeId = req.params.id;
  getOnePlane(planeId).then((plane) => {
    if (plane) {
      res.json(plane);
    } else {
      res.status(404).json({ error: "Plane not found" });
    }
  });
});

//# 1 flugzeug löschen

app.delete("/api/planes/:id", (req, res) => {
  const planeId = req.params.id;
  deletePlane(planeId).then(() =>
    res.json({ message: "Plane deleted successfully" })
  );
  // .catch((error) => {
  //   console.error("Error:", error);
  //   res.status(500).json({ error: "Internal Server Error" });
  // });
});

//# Flugzeug Update

app.put("/api/planes/:id", (req, res) => {
  const planeId = req.params.id;
  const planeUpdate = req.body;

  updateOnePlane(planeId, planeUpdate).then((updatedPlane) =>
    res.json(updatedPlane)
  );
  // .catch((error) => {
  //   console.error("Error:", error);
  //   res.status(500).json({ error: "Internal Server Error" });
  // });
});

//# LISTEN

app.listen(PORT, () => {
  console.log("Port is:" + PORT);
});
