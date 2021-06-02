function maxAreaOptimal(array) {
  let i = 0,
    j = array.length - 1;
  let maxArea = 0;
  while (i < j) {
    const height = Math.min(array[i], array[j]);
    const width = j - i;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if (array[i] <= array[j]) i++;
    else j--;
  }
  return maxArea;
}

console.log(maxAreaOptimal([7, 1, 2, 3, 9]));
