//--------------1.1

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

//----------- 2.1

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

//-----------------3.1

const asyncOperation = (number) => {
  return new Promise((resolve, reject) => {
    resolve(number * number);
  });
};

const chainBuilder = (number) => {
  return asyncOperation(number)
    .then((result) => {
      return asyncOperation(result);
    })
    .then((result) => {
      return asyncOperation(result);
    })
    .then((result) => {
      return asyncOperation(result);
    });
};

chainBuilder(2);

//---------------3.2 (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all?retiredLocale=de)

//Verwendung von Promise.all:
//Um auf die Erfüllung aller Versprechen zu warten,
//können Sie Promise.all verwenden. Diese Funktion nimmt
//ein Array von Versprechen entgegen und gibt ein neues
//Versprechen zurück, das erfüllt ist, wenn alle Versprechen
//im Array erfüllt wurden, und stellt ein Array mit den
//Ergebnissen jedes Versprechens in derselben Reihenfolge bereit.

const ownSetTimeOut = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 0) {
        const randomNumber = Math.round(Math.random() * 1000) + 1;
        resolve(randomNumber);
      } else {
        reject(`Time is 0 or smaller, I cannot travel to the past:` + time);
      }
    }, time);
  });
};

const promiseA = ownSetTimeOut(100);
const promiseB = ownSetTimeOut(2000);
// const promiseC = ownSetTimeOut(0);
// const promiseD = ownSetTimeOut(-3);

// Promise.all([promiseA, promiseB, promiseC, promiseD])
//   .then((resolveResultALL) => {
//     console.log("All values of resolveResult are:" + resolveResultALL);
//   })
//   .catch((rejectResultALL) => {
//     console.log("ALL Reject Result are :" + rejectResultALL);
//   });

Promise.all([promiseA, promiseB])
  .then((resolveResultALL) => {
    console.log("All values of resolveResult are: " + resolveResultALL);
  })
  .catch((rejectResultALL) => {
    console.log("ALL Reject Result are :" + rejectResultALL);
  });

// ----------Test Verschatelung

const ownSetTimeOutTEST = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 0) {
        const randomNumber = Math.floor(Math.random() * 100); //inclusive 0 und nur bis 100, damit nicht ewig dauert, wenn 0 gefunden wird, wird den Loop stoppen
        console.log("randomTime is: ", randomNumber);
        resolve(randomNumber);
      } else {
        reject(`Time is 0 or smaller, I cannot travel to the past:` + time);
      }
    }, time);
  });
};

// ownSetTimeOutTEST(1)
//   .then((resolveResult) => ownSetTimeOutTEST(resolveResult))
//   .catch((rejectResult) => console.log(rejectResult));

function generateRandomChain() {
  ownSetTimeOutTEST(1)
    .then((resolveResult) => {
      if (resolveResult !== 0) {
        return generateRandomChain();
      } else {
        console.log("The number 0 was generated. Process stopped.");
      }
    })
    .catch((rejectResult) => console.log(rejectResult));
}

generateRandomChain();
