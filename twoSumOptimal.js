//Optimal Solution using hashMaps

function twoSumOptimal(nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const currentMapVal = hashMap[nums[i]];
    if (currentMapVal >= 0) return [currentMapVal, i];
    let numberToFind = target - nums[i];
    hashMap[numberToFind] = i;
  }
  return null;
}

console.log(twoSumOptimal([1, 3, 7, 9, 2], 4));
