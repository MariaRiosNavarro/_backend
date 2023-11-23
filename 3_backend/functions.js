export function moreAsHundredThousand(array) {
  const copyArray = [...array];
  const newArray = copyArray.filter((item) => item.population > 100000);
  return console.log(newArray);
}

export function lessAsHundredThousand(array) {
  const copyArray = [...array];
  const newArray = copyArray.filter((item) => item.population < 100000);
  return console.log(newArray);
}
