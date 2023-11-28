import fs from "fs";

//eigene vertrag-promise

// function hausbau(ok = true) {
//   return new Promise((resolve, reject) => {
//     if (ok) {
//       resolve("Das Haus steht");
//     } else {
//       reject();
//     }
//   });
// }

// hausbau().then((parameter) => console.log(parameter));

// !positive

// const unserPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Erfolg");
//   }, 2000);
// });

// unserPromise.then((result) => console.log(result));

// console.log("ganz unten in code");

// !negative promise

// const unserPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("falsch");
//   }, 2000);
// });

// //wenn ein Promise erfolgreich ausgefuhrt wurde, bekommen wir das ergebnis mit .then. Wenn das Promise abgelehnt wurde dann bekomen wir das ergebnis mit catch
// unserPromise
//   .then((result) => console.log(result))
//   .catch((result) => console.log(result));
// console.log("ganz unten in code");

//Beispiel mit dem fs Module

function promiseReadFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

//DAS UNTEN GIBT FEHLER WEIL NICHT EXISTIERT
// promiseReadFile("./flugzeuge")
//   .then((data) => console.log(data.toString()))
//   .catch((err) => console.log("Fehler", err));

function promiseWRITEFile(filename, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, () => {
      resolve(true);
    });
  });
}

promiseReadFile("./adresses.csv")
  .then((data) => data.toString())
  .then((string) => promiseWRITEFile("./liste", string))
  .then((ok) => console.log(ok))
  .catch((err) => console.log("Fehler", err));

//fetch unabhängig
// --------

//Andere Beispiel

function ichMachAsyc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const i = Math.random();
      if (i > 0.8) resolve(i); //-> wird in .then beahndelt
      else reject(i); //-> wird in .catch behandelt
    }, 500);
  });
}

// Wir handlen resolve in then und reject in catch

ichMachAsyc()
  .then((resolveResult) => console.log("Erfolg", resolveResult))
  .catch((rejectResult) => console.log("Kaputt", rejectResult));

//  # SIMPLE BEISPIEL für Promises

// Funktion für das Wasser kochen
function wasserKochen() {
  return new Promise(function (resolve, reject) {
    console.log("Wasser wird gekocht...");

    setTimeout(function () {
      // Annahme: Das Wasser ist jetzt gekocht
      resolve("Wasser ist fertig");
    }, 2000);
  });
}

// Funktion für das Kaffee brühen
function kaffeeBruhen() {
  return new Promise(function (resolve, reject) {
    console.log("Kaffee wird gebrüht...");

    setTimeout(function () {
      // Annahme: Der Kaffee ist jetzt fertig
      resolve("Kaffee ist fertig");
    }, 3000);
  });
}

// Wasser kochen und dann Kaffee brühen
wasserKochen()
  .then(function (wasserStatus) {
    console.log("wasserStatus", wasserStatus);

    return kaffeeBruhen(); // Rückgabe des neuen Promises für den nächsten Schritt
  })
  .then(function (kaffeeStatus) {
    console.log("kaffeeStatus", kaffeeStatus);
  })
  .catch(function (fehler) {
    console.error("Es ist ein Fehler aufgetreten:", fehler);
  });

// --------

const fun = () => {
  return 4;
};

const fun2 = () => 8;

console.log("fun()", fun());
console.log("fun", fun);
console.log("fun2()", fun2());
console.log("fun2", fun2);
