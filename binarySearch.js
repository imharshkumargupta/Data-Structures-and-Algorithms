function binarySearchIterative(array, target) {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left <= right && array[middle] !== target) {
    if (target > array[middle]) left = middle + 1;
    else if (target < array[middle]) right = middle - 1;

    middle = Math.floor((left + right) / 2);
  }
  return array[middle] === target ? middle : -1;
}

console.log(binarySearchIterative([1, 2, 4, 6, 7, 78, 100], 100));

//learn in this - how to handle the case when the element is not present
//if the length of the subarray is 0, then return -1 -> if(right-left+1 === 0)
function binarySearchRecursive(array, target, left, right) {
  let middle = Math.floor((left + right) / 2);
  if (right - left + 1 === 0) return -1;
  //   if (left > right) {
  //     console.log(left, right);
  //     return -1;
  //   }
  if (target > array[middle])
    return binarySearchRecursive(array, target, middle + 1, right);
  else if (target < array[middle])
    return binarySearchRecursive(array, target, left, middle - 1);

  return middle;
}

console.log(binarySearchRecursive([1, 2, 4, 6, 7, 78, 100], 78, 0, 6));
