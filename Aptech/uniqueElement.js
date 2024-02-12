let array = ["himansu", "sekhar", "himansu", "rakesh"];

function duplicateRemove(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let count = 0;

    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j] && i != j) {
        count = count + 1;
        break;
      }
    }

    if (count === 0) {
      //element is present only single time in the array so pushing this element in new array
      newArr.push(array[i]);
    }
  }

  return newArr;
}

let res = duplicateRemove(array);

console.log(res);
