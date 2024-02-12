let arr = [1, 2, 3, 4, 4, 5, 6, 6, 76, 12, 32];
function randomN(arr) {
  if (arr.length === 0) {
    return null;
  }
  let randomelement = Math.floor(Math.random() * arr.length);
  return arr[randomelement];
}
console.log(randomN(arr));
