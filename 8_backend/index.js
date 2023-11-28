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

//   2.1

const ramdomNumberBiggerTo6 = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.round(Math.random() * 10) + 1;
    if (randomNumber > 6) {
      resolve("number was : " + randomNumber);
    } else {
      reject("number was : " + randomNumber);
    }
  });
};

ramdomNumberBiggerTo6()
  .then((resolveResult) => console.log("Resolve Result is:", resolveResult))
  .catch((rejectResult) => console.log("Reject Result is: ", rejectResult));
