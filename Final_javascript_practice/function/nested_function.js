// bahar ka function cant access the varaible inside the function but inner function can access the outer varaible function
function one() {
  const username = "himansu";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}
one();

// function
console.log(add1(5));
function add1(num) {
  //we can access before defination
  return num + 1;
}
console.log(add2(5));
const add2 = function (num) {
  //in this function expression phele declare karna padega
  return num + 2;
};
