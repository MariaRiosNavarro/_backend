import fs from "fs/promises";

//# herstellt json

export const setup = () => {
  fs.access("./planes.json")
    .then((data) => console.log(data))
    .catch((err) => fs.writeFile("./planes.json", "[]"));
};

//# alle planes anzeigen

export const allPlanes = () => {
  return fs
    .readFile("./planes.json", { encoding: "utf8" })
    .then((data) => JSON.parse(data));
};

// # 1 Plane speichern
export const savePlane = (plane) => {
  allPlanes()
    .then((data) => {
      data.push(plane);
      console.log(data);
      return data;
    })
    .then((array) => fs.writeFile("./planes.json", JSON.stringify(array)));
};

// # 1 Plane löschen

export const deletePlane = (id) => {
  return allPlanes().then((data) => {
    const updatedData = data.filter((onePlane) => onePlane.id !== id);

    fs.writeFile("./planes.json", JSON.stringify(updatedData), (err) => {
      if (err) {
        console.error("Error:", err);
      } else {
        console.log("Plane was deleted");
      }
    });
  });
  // .catch((error) => {
  //   console.error("Error:", error);
  //   throw error;
  // });
};

// # 1 Plane finden und update

// export const updateOnePlane = (id, update) => {
//   return allPlanes().then((data) => {
//     const updatedData = data.map((onePlane) =>
//       onePlane.id === id ? { ...onePlane, ...update } : onePlane
//     );

//     fs.writeFile("./planes.json", JSON.stringify(updatedData), (err) => {
//       if (err) {
//         console.error("Error:", err);
//       } else {
//         console.log("Plane was updated");
//       }
//     });
//   });
// };

export const updateOnePlane = (id, update) => {
  return allPlanes()
    .then((data) => {
      const index = data.findIndex((onePlane) => onePlane.id === id);
      if (index !== -1) {
        data[index] = { ...data[index], ...update };
        return new Promise((resolve, reject) => {
          fs.writeFile("./planes.json", JSON.stringify(data));
        });
      }
    })
    .then((updatedPlane) => updatedPlane);
  // .catch((error) => {
  //   console.error("Error:", error);
  //   throw error;
  // });
};

// # 1 einzige Plane ausgeben

export const getOnePlane = (id) => {
  return allPlanes().then((data) => {
    const foundPlane = data.find((onePlane) => onePlane.id === id);
    if (foundPlane) {
      return foundPlane;
    } else {
      console.log("This Plane with this ID is not here");
      return null;
    }
  });
};
