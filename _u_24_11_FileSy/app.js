import { error } from "console";
import fs from "fs";

// Async Fetch

// fetch("https://api.chucknorris.io/jokes/random")
//   .then((response) => response.json())
//   .then((data) => {
//     fs.writeFile("./witze", ""+data.value + "\n", { flag: "a" }, () => {
//       console.log("witz gespeichert");
//     });
//   });

//{ flag: "a" }: Hier ist flag eine Eigenschaft,
// die Sie bei der Verwendung der writeFile-Methode
// in Node.js setzen können. Der Wert "a" bedeutet,
// dass die Datei im Append-Modus geöffnet werden soll.
// Das bedeutet, dass, wenn die Datei bereits existiert,
// der neue Inhalt an das Ende der bestehenden Datei
// angehängt wird, anstatt sie zu ersetzen.
// Im Zusammenhang mit Ihrem Code verwenden Sie { flag: "a" }
// um sicherzustellen, dass jedes Mal, wenn Sie das Skript ausführen,
// der neue Witz an die bestehende Datei ("./witze")
// angehängt wird, anstatt sie zu überschreiben.
// Auf diese Weise sammeln sich die Witze in der Datei an,
//  anstatt nur den neuesten zu enthalten.

// fetch("https://api.chucknorris.io/jokes/random")
//   .then((response) => response.json())
//   .then((data) => {
//     fs.writeFile("./witze", `witze: ${data.value}\n`, { flag: "a" }, () => {
//       console.log("Witz gespeichert");
//     });
//   });

// for (let i = 0; i < 100; i++) {
//   fetch("https://api.chucknorris.io/jokes/random")
//     .then((response) => response.json())
//     .then((data) => {
//       fs.writeFile(
//         "./witze",
//         i + ": " + data.value + "\n",
//         { flag: "a" },
//         () => {
//           console.log("Witz gespeichert");
//         }
//       );
//     });
// }

//Da es asyncron ist, ist die liste durcheinander und nicht eine hinter aneinder
//Fetch und writeFile sind asyncron und deswegen die ergebnise sind seltsam und verzogerungen kommen

//Ich mochte ein Ordner erstellen- fba money

fs.mkdir("./fbaBooks", { recursive: true }, (err, path) => {
  if (err) {
    console.log("error  ??", err);
    return;
  }
});

for (let i = 0; i < 50; i++) {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      fs.writeFile(
        "./fbaBooks/witze.md",
        "### " + data.value + "\n\n",
        { flag: "a" },
        () => {
          console.log("Witz gespeichert");
        }
      );
    })
    .catch((err) => console.log("witztnummer: ", error));
}
