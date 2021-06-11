function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let current in collection) {
    if (collection[current] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 3, 4, 5, 5));
