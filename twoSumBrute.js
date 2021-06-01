function findTwoSum(integerArray, target) {
  for (let i = 0; i < integerArray.length; i++) {
    for (let j = i + 1; j < integerArray.length; j++) {
      if (integerArray[i] + integerArray[j] === target) {
        return { i, j };
      }
    }
  }
  return "Required Indices not found";
}

console.log(findTwoSum([1, 3, 7, 9, 2], 16));
