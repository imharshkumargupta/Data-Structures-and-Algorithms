var reverse = function (x) {
  let absoluteNumber = Math.abs(x);
  let reverseNumber = 0;
  while (absoluteNumber) {
    reverseNumber = reverseNumber * 10 + (absoluteNumber % 10);
    absoluteNumber = Math.floor(absoluteNumber / 10);
  }
  if (x < 0) return reverseNumber * -1;
  return reverseNumber;
};

console.log(reverse(-123));

//important
function reverse(n) {
  // Array#reverse method takes no argument.
  // You can use `Math.abs()` instead of changing the sign if negative.
  // Conversion of string to number can be done with unary plus operator.
  var reverseN = +String(Math.abs(n)).split("").reverse().join("");
  // Use a number constant instead of calculating the power
  if (reverseN > 0x7fffffff) {
    return 0;
  }
  // As we did not change the sign, you can do without the boolean isNegative.
  // Don't multiply with -1, just use the unary minus operator.
  // The ternary operator might interest you as well (you could even use it
  //    to combine the above return into one return statement)
  return n < 0 ? -reverseN : reverseN;
}

console.log(reverse(-123));
console.log(reverse(1563847412));
