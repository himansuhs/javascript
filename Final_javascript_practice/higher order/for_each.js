const arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
  console.log(element);
});
function printme(item) {
  console.log(item);
}
// arr.forEach(printme);

arr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    lang: "javascript",
    file: "js",
  },
  {
    lang: "java",
    file: "java",
  },
  {
    lang: "python",
    file: "py",
  },
];
myCoding.forEach((item) => {
  // console.log(item.lang);
});

// for each loop not return any value
const result = arr.forEach((item) => {
  console.log(item);
});
console.log(result);
