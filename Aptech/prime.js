let arr=[2,3,4,5,6,9,12,23,43,41]
let arr1=[]
for(let i=0;i<=arr.length;i++){
  if(arr[i]==1){
    return false
  }
  if(arr[i]==2){
    arr1.push(arr[i])
  }
  else if(arr[i]>2){
    for(let checker=2;checker<arr[i];checker++){
      if(arr[i]%checker==0){
         break

      }else{
        arr1.push(arr[i])
      }
    }
  }
}
console.log(arr1)
