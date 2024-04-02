// when we are referring current context which is in {} then we are using this keyword
const user = {
  username: "himansui",
  price: 23,
  welcomeMessage: function () {
    console.log(`${this.username},welecome`);
    // console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "him";
// user.welcomeMessage();

// node environment mai rahete hai tab this global ko refer karta hai and waha kuch nhi hai
// console.log(this);
// browser ke ander jo global object hai vo window hai

// function chai() {
//   let username = "himansu";
//   console.log(this.username);
// }
// chai();  output : undefined

// arrow function

// const chai = () => {
//   let username = "himansu";
//   console.log(this.username);
// };
// chai();

const chai = (num1, num2) => num1 + num2; //implicit function without {} and return
// { } use hoa tho return likhna padega and ( ) use kiya tho return nhi likhnaa padega
const obj = () => ({ name: "himansu" });
console.log(chai(3, 5));
console.log(obj());
