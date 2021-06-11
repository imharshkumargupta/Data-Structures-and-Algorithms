function getTrappedRainwater(heights) {
  let total = 0;
  let left = 0;
  let right = heights.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        total += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        total += maxRight - heights[right];
      }
      right--;
    }
  }

  return total;
}

console.log(getTrappedRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
