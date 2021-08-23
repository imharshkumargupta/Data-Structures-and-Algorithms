function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    //remember this - improves the efficiency of the code.
    if (minIndex !== i) {
      swap(array, i, minIndex);
    }
  }
  return array;
}

function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

console.log(selectionSort([1, 5, 3, 10, 7, 2, 4]));
