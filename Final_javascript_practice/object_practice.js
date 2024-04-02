const sym = Symbol("key1");

const user = {
  name: "himansu",
  age: 21,
  role: "software dev",
  [sym]: "mykey1",
};

user.email = "himansusekhar@gmail.com";

// Object.freeze(user);
// user.email ="hsjdkj";
user.greeting = function () {
  console.log("hello");
};
user.greetingt = function () {
  console.log(`hello ${this.name}`);
};
console.log(user.greetingt());

// we can declare object in this way also.....  singleton object
const User = new Object();
// another way creating object non singleton object
const User1 = {};

// nesting object
const RegularUser = {
  fullname: {
    username: {
      name: "himansu122",
      age: 12,
    },
    lastname: "sahoo",
  },
};
// console.log(RegularUser.fullname.username.age);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "d", 4: "r" };
const obj3 = { obj1, obj2 };
// console.log(obj3);
// const obj4 = Object.assign({},obj1, obj2);
// console.log(obj4);
const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));
// console.log(obj1.hasOwnProperty("1"));

// de-structuring object

const course = {
  courseName: "javascript",
  price: 123,
};
// const { courseName: name } = course; when there is curly brases it means it is de structing
console.log(name);
