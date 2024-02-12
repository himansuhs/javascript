let arr = [2, 3, 4, 5, 6, 9, 12, 23, 43, 41];

function isPrime(num) {
  let primeFlag = false;

  if (num == 1) {
    return false;
  } else if (num == 2) {
    return num;
  } else if (num > 2) {
    for (let checker = 2; checker < num; checker++) {
      if (num % checker == 0) {
        primeFlag = false;
        break;
      } else {
        primeFlag = true;
      }
    }
  }

  if (primeFlag == true) {
    return num;
  }
}

let primeNumbers = arr.filter(isPrime);

console.log(primeNumbers);
