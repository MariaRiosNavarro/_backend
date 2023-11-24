//Einführung Asynchron mit Callbacks

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

// fs.writeFile("./geschichte", "Da ist ein String", () => {
//   console.log("Meine Datei ist geschrieben");
// });

fs.writeFile("./new", "andere", () => {
  console.log("Meine Datei new ist geschrieben");
});

fs.readFile("./geschichte");
