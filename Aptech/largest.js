function lagestElement(arr) {
  let seconndlargest = arr[0];
  let largest = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largest) {
      seconndlargest = largest;
      largest = arr[i];
    } else if (arr[i] > seconndlargest && arr[i] !== largest) {
      seconndlargest = arr[i];
    }
  }
  return seconndlargest;
}
let arr = [2, 12, 33, 11, 56, 78];
console.log(lagestElement(arr));
