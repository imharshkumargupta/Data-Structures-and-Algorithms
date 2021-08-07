//complete the solution to this problem later; the matchTable is complete

function matchTable(string) {
  const array = Array.from({ length: string.length }).fill(0);
  let suffixEnd = 1;
  let prefixEnd = 0;
  while (suffixEnd < string.length) {
    if (string[suffixEnd] === string[prefixEnd]) {
      prefixEnd++;
      array[suffixEnd] === prefixEnd;
      suffixEnd++;
    } else if (string[suffixEnd] !== string[prefixEnd] && prefixEnd !== 0) {
      prefixEnd = array[prefixEnd - 1];
      array[suffixEnd] = 0;
      suffixEnd++;
    }
  }
  return array;
}
