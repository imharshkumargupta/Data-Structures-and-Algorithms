const array = Array.from({ length: 5 }, (v, i) => i);

function argument(a, b, c) {
  console.log(arguments);
}

console.log(array);
argument(...array);
