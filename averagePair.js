function averagePair(array, target) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    if (average(array[i], array[j]) < target) i++;
    else if (average(array[i], array[j]) > target) j++;
    else return true;
  }

  return false;
}

function average(a, b) {
  return (a + b) / 2;
}
