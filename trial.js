function twoSumBrute(array, target) {
  if (array.length <= 1) return null;
  for (let i = 0; i < array.length; i++) {
    const numberToFind = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === numberToFind) return [i, j];
    }
  }
  return null;
}

console.log(twoSumBrute([1, 24], 25));
