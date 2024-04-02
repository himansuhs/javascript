const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const i = 0;
// const result = nums.reduce(
//   (acumlator, currentvalue) => acumlator + currentvalue,
//   i
// );
// console.log(result);
// const result = nums.reduce((acc, current) => {
//   console.log(`acc:${acc} current:${current}`);
//   return acc + current;
// }, 1);
// console.log(result);

const courses = [
  {
    course: "data",
    price: 200,
  },
  {
    course: "data",
    price: 200,
  },
  {
    course: "data",
    price: 200,
  },
];
const result2 = courses.reduce((acc, current) => current.price + acc, 0);
console.log(result2);
