let arr = [2,3,4,5,6,7,87,66,77,67]

let arr1 =  []

function isPrime(num){
    let primeFlag = false

    if (num==1){
        return false
    }
    else if(num==2){
        return num
    }
    else if(num>2){

        for (let checker = 2 ; checker<num ; checker++){
            if (num%checker==0){
                primeFlag = false
                break
            }
            else{
                primeFlag = true
            }
        }

    }
    if (primeFlag==true){
        return num
    }
}

for(let i = 0 ; i < arr.length ; i++){
    result= isPrime(arr[i])

    if (result){

        arr1.push(arr[i])

    }
  
    
}
console.log(arr1);