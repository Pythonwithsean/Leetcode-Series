nums = [1, 2, 3, 4, 1, 1, 2];
k = 2;
let result = [];
let dummy;
const map = new Map();
for (let i = 0; i < nums.length; i++) {
  if (!map.has(nums[i])) {
    map.set(nums[i], [nums[i]]);
  } else {
    map.get(nums[i]).push(nums[i]);
  }
}

dummy = [...map.values()];
curr = dummy.sort((a, b) => b.length - a.length);
for (let i = 0; i < k; i++) {
  result.push(curr[i][0]);
}

console.log(result);
