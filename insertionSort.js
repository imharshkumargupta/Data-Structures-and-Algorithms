function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j = i - 1;
    for (; j >= 0 && array[j] > currentValue; j--) {
      // or use the while statement
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
}

console.log(insertionSort([1, 5, 3, 10, 7, 2, 4]));
