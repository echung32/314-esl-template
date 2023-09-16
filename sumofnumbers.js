// https://courses.ics.hawaii.edu/ics314f23/morea/coding-standards/experience-five-problems-1.html

function sumFor(nums) {
  let sum = 0;
  for (const b of nums) {
    sum += b;
  }
  return sum;
}

function sumWhile(nums) {
  let sum = 0;
  let index = 0;
  while (index < nums.length) {
    sum += nums[index];
    index++;
  }
  return sum;
}

function sumRecursion(num, i) {
  if (i >= num.length) return 0;
  return sumRecursion(num, i + 1) + num[i];
}

function sumTheSimpleWay(num) {
  return _.reduce(num, (a, n) => a + n, 0);
}

const nums = [1, 2, 3, 4];

console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums, 0));
console.log(sumTheSimpleWay(nums));
