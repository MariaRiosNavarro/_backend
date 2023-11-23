export const firstOfArray = (array) => {
  return console.log("firstOfArray", array[0]);
};

export const allWithoutLast = (array) => {
  const copyArray = [...array];
  copyArray.pop();
  return console.log("allWithoutLast", copyArray);
};

export const lastOfArray = (array) => {
  const copyArray = [...array];
  const lastOne = copyArray.pop();
  return console.log("lastOfArray", lastOne);
};

export const allWithoutFirst = (array) => {
  const copyArray = [...array];
  const firstOne = copyArray.shift();
  return console.log("allWithoutFirst", copyArray);
};

export const removeValueOfArray = (array, value) => {
  const copyArray = [...array];
  const arrayWithoutValue = copyArray.filter((item) => item !== value);
  return console.log("removeValueOfArray", arrayWithoutValue);
};

export const removeDuplicate = (array) => {
  const uniq = [...new Set(array)];
  return console.log("removeDuplicate", uniq);
};

export const sumeAllArrayNumbers = (array) => {
  const copyArray = [...array];
  const result = copyArray.reduce((a, b) => a + b);
  return console.log("sumeAllArrayNumbers", result);
};

export const randomNumberBetween = (a, b) => {
  const random = Math.round(Math.random() * (b - a) + a);
  //   console.log("randomNumberBetween", random);
  return random;
};

export const firstLetterUpercase = (string) => {
  const firstLetter = string.charAt(0);
  const newString = string.replace(firstLetter, firstLetter.toUpperCase());
  return console.log("firstLetterUppercase", newString);
};

export const allLetterUpercase = (string) => {
  const newString = string.toUpperCase();
  return console.log("allLetterUpercase", newString);
};

export const sameLastLetter = (stringA, letter) => {
  return console.log("sameLastLette", stringA.endsWith(letter));
};
