const maxSubarraySum = function (array, num) {
  let i = 0;
  let j = num;
  let maxSum = 0;
  if (array.length < num) return null;
  while (i < num) {
    maxSum = maxSum + array[i];
    i++;
  }
  let tempSum = maxSum;
  while (j < array.length) {
    tempSum = tempSum - array[j - num] + array[j];
    j++;
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2));
