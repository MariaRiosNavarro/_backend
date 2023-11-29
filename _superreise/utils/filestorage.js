import fs from "fs/promises";

//herstellt json

export const setup = () => {
  fs.access("./planes.json")
    .then((data) => console.log(data))
    .catch((err) => fs.writeFile("./planes.json", "[]"));
};

//liest daten

export const allPlanes = () => {
  return fs
    .readFile("./planes.json", { encoding: "utf8" })
    .then((data) => JSON.parse(data));
};

export const savePlane = (plane) => {
  allPlanes()
    .then((data) => {
      data.push(plane);
      console.log(data);
      return data;
    })
    .then((array) => fs.writeFile("./planes.json", JSON.stringify(array)));
};
