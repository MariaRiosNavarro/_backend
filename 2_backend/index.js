import { names, numbers } from "./data.js";
import {
  firstOfArray,
  allWithoutLast,
  lastOfArray,
  allWithoutFirst,
  removeValueOfArray,
  removeDuplicate,
  sumeAllArrayNumbers,
  randomNumberBetween,
  firstLetterUpercase,
  allLetterUpercase,
  sameLastLetter,
} from "./functions.js";

firstOfArray(names);
firstOfArray(numbers);

allWithoutLast(names);
allWithoutLast(numbers);

lastOfArray(names);
lastOfArray(numbers);

allWithoutFirst(names);
allWithoutFirst(numbers);

removeValueOfArray(names, "Simon");
removeValueOfArray(numbers, 6);

removeDuplicate(names);
removeDuplicate(numbers);

sumeAllArrayNumbers(numbers);

randomNumberBetween(19, 45);
firstLetterUpercase("hallo");
allLetterUpercase("uppercase?");
sameLastLetter("hallo", "o");
sameLastLetter("hallo", "e");
