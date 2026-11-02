// 6. What’s the purpose of reduce on an array? Illustrate by summing an array.

const nums = [1,2435,3456,4];
const sum = nums.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
