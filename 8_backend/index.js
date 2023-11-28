//1.1

const doubleNumberAsync = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number !== 0) {
        resolve(2 * number);
      } else {
        reject(number);
      }
    }, 2000);
  });
};

doubleNumberAsync(5)
  .then((resolveResult) => console.log("The Double is: ", resolveResult))
  .catch((resolveReject) => console.log("Double of 0 is: ", resolveReject));

doubleNumberAsync(0)
  .then((resolveResult) => console.log("The Double is: ", resolveResult))
  .catch((resolveReject) => console.log("Double of 0 is: ", resolveReject));

doubleNumberAsync(85473)
  .then((resolveResult) => console.log("The Double is: ", resolveResult))
  .catch((resolveReject) => console.log("Double of 0 is: ", resolveReject));
