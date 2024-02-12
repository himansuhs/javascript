let originalArray = [2, 4, 3, 5, 2, 6, 5, 23, 24];

for (let i = 0; i < originalArray.length; i++) {
  for (let j = i + 1; j < originalArray.length; j++) {
    if (originalArray[i] === originalArray[j]) {
      originalArray.splice(j, 1);
      j--;
    }
  }
}

console.log(originalArray);
