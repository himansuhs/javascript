// function add(number1, number2) {
//   //these are called parameter
//   console.log(number1 + number2);
// }
// add(2, 3); //these are called arguments

// with return
function add1(number1, number2) {
  let result = number1 + number2;
  return result;
}
const result = add1(2, 3);
// console.log(result);

function loginUser(username = "himanshi") {
  if (username === undefined) {
    console.log("plz enter the username");
    return;
  }
  return `${username} just loggedin`;
}
const user = loginUser();
// console.log(user);

// rest  operater
function addCart(...num1) {
  return num1;
}
// console.log(addCart(233, 22, 3, 3, 122));

const userp = {
  username: "himansu1",
  price: 120,
};
function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is${anyobject.price}`
  );
}
handleObject(userp);

// returning second value of array
const arrays = [1, 2, 3, 45, 6];
function secondValue(anyarray) {
  return anyarray[1];
}
console.log(secondValue([2, 3, 4, 5, 1]));
