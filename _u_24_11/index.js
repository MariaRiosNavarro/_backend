//Einführung Asynchron mit Callbacks

import { log } from "console";
import fs from "fs";
//In Node.js steht "fs" für "File System",
//was auf Deutsch "Dateisystem" bedeutet.
// Das fs-Modul ermöglicht es dir, mit Dateien und Verzeichnissen
//auf deinem Computer zu arbeiten.
// Hier importieren  das fs-Modul und
// verwenden dann zwei Funktionen: writeFile und readFile

//Arten der Pfandangabe

//Relativpfad

// WO wir der project ausführen, wenn ich node index.js in der terminal ausführe,
// da wird dieses datei hergestellt . Relativ wo wir das ausführen.
// Also wenn ich in terminal zu den ordner /test/ gehe und da node index.js ausführen
// es wird sich da ein file geschichte mit den text "Da ist ein String"

//Absolutpfad

//Komplete pfad in Dateisystem von hier: /Users/supercoder/Documents/supercode/repos/_BACKEND/_u_24_11
//Aber so sieht nur bei mir aus, nichtt in anderen Computer, dswegen, ist die zu vermeiden, immer lieber relativ

//fs.writeFile("PFAD", "WAS MUSS IN DER DATEI DRIN", CALLBACK)

fs.writeFile("./geschichte", "Da ist ein String", () => {
  console.log("Meine Datei ist geschrieben");
});

fs.writeFile("./new", "andere", () => {
  console.log("Meine Datei new ist geschrieben");
});

//Datei auslesen, 2 versionen die ergebnisse als string zu geben

// VersionA

fs.readFile("./geschichte", (err, data) => {
  if (err) {
    console.log("Das ist kaput", err);
    return;
  }
  console.log(String(data)); // Ohne String kommt das: <Buffer 44 61 20 69 73 74 20 65 69 6e 20 53 74 72 69 6e 67>, wir mussen unwandeln
});

// VersionB

// fs.readFile("./geschichte", { encoding: "utf8" }, (err, data) => {
//   if (err) {
//     console.log("Das ist kaput", err);
//     return;
//   }
//   console.log(data);
// });

console.log("BIN UNTEN IN DEN FILE");

// https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#file-system-flags

// fs.writeFile('./geschichte', 'new new', {flag:''})
