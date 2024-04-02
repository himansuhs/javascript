// filter method return the value where for each is not return the value
const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = mynum.filter((num) => num > 4);
console.log(result);
const result1 = mynum
  .map((item) => item * 10)
  .map((item) => item + 1)
  .filter((item) => item >= 40);
console.log(result1);
