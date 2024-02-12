let arr=[5,7,9,11,15,17]

function missingOdd(arr){
  for(let i=0;i<=arr.length;i++){
    let current=arr[i]
    let next=current+2
    if(arr[i+1]!==next){
       
       return next
    }
    
  }
}
let s=missingOdd(arr)
console.log(s)