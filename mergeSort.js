function merge(array1, array2) {
  // O(n)
  let results = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      results.push(array1[i]);
      i++;
    } else {
      results.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    results.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    results.push(array2[j]);
    j++;
  }
  return results;
}

function mergeSort(array) {
  // O(log n)
  if (array.length <= 1) return array;

  let middle = Math.floor(array.length / 2);
  return merge(
    mergeSort(array.slice(0, middle)),
    mergeSort(array.slice(middle))
  );
}

console.log(mergeSort([1, 5, 3, 10, 7, 2, 4]));
