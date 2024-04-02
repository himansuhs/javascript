var b = 300; //global scope mai jo likhte hai vo block scope mai available raheti hai
let a = 300;
if (true) {
  let a = 10; // block scope mai jo raheti hai vo bahar access nhi raheti
  var b = 20;
  const c = 30;
  console.log("inner", a);
}
console.log(a);
