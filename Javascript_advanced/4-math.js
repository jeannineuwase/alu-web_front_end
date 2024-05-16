function divideBy(firstNumber) {
  return (secondNumber) => secondNumber / firstNumber;
}

function addBy(firstNumber) {
  return (secondNumber) => secondNumber + firstNumber;
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

console.log(addBy100(20)); // 120
console.log(addBy1000(20)); // 1020
console.log(divideBy10(20)); // 2
console.log(divideBy100(20)); // 0.2
