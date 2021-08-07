//not the best sorting algorithm, use others generally

function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

//optimized with noSwap

function bubbleSort(array) {
  let noSwap = true;
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return array;
}

const array = [4, 2, 6, 8, 1, 3];

console.log(bubbleSort(array));
