const getDigit = (number, place) => {
  let digit = Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
  return digit;
};

function digitCount(number) {
  // const digitCount = number.toString().length;//this is O(n)
  if (number === 0) return 1;
  const digitCount = Math.floor(Math.log10(Math.abs(number))) + 1;
  return digitCount;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(getDigit(12345, 2));
console.log(digitCount(12345));
console.log(radixSort([1, 5, 3, 10, 7, 2, 4]));
