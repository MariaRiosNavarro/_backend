//eigene vertrag-promise

function hausbau(ok = true) {
  return new Promise((resolve, reject) => {
    if (ok) {
      resolve("Das Haus steht");
    } else {
      reject();
    }
  });
}

hausbau().then((parameter) => console.log(parameter));
