import express from "express";

const PORT = 9999;
const app = express();

app.listen(PORT, () => {
  console.log("Port is:" + PORT);
});
