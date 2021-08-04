function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

const returnValue = factorial(4);
console.log(returnValue);

function iterativeFactorial(num) {
  let value = 1;
  while (num !== 0) {
    value = value * num;
    num--;
  }
  return value;
}

const returnIterative = factorial(4);
console.log(returnIterative);
