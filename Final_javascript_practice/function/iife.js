// Immediately Invoked function Expressions (IIFE)
// global scope ke polution ko hatne ke liye jo bhi variables hai use karte hai
//It's a common pattern used to create a local scope for variables, preventing them from polluting the global scope
(function chai() {
  //named IIFE
  console.log("himansu");
})();
((name) => {
  console.log(`db connected ${name}`);
})("himansu");
