import express from "express";

const PORT = 9898;

const app = express();

// middelware

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.static("folder"));

app.get("./", (req, res) => {
  res.end("Hallo leute");
});

app.listen(PORT);
