function maxAreaBrute(array) {
  let maxArea = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const width = j - i;
      const height = Math.min(array[i], array[j]);
      const area = width * height;
      if (area > maxArea) maxArea = area;
    }
  }
  return maxArea;
}

console.log(maxAreaBrute([7, 1, 2, 3, 9]));
