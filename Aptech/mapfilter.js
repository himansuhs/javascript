
// without map and filter function
let arr=[12,22,312,3,4,17]
let filterarr=[]
for(let i=0;i<=arr.length;i++){
  let number=arr[i]
  if(number%2===0){
    filterarr.push(number)
  }
}
console.log(filterarr)
let maparr=[];
for(let i=0;i<filterarr.length;i++){
  let doublesum=filterarr[i]*2;
  maparr.push(doublesum)

}
console.log(maparr)


// using filter and map function

let maparray=arr.filter((number)=>number%2===0).map((number)=>number*2)
console.log(maparray)



// Menu items with their prices
let menu = [
  { name: 'Item 1', price: 10.99 },
  { name: 'Item 2', price: 8.49 },
  { name: 'Item 3', price: 12.9944 },
  { name: 'Item 4', price: 15.99 }
];

// Array to store the customer's order
let order = [];

// Function to add an item to the order
function addToOrder(itemIndex) {
  const selectedItem = menu[itemIndex];

  if (selectedItem) {
      order.push(selectedItem);
      console.log(`${selectedItem.name} added to the order. Price: $${selectedItem.price.toFixed(2)}`);
  } else {
      console.log('Invalid item selection.');
  }
}

// Function to view the current order
function viewOrder() {
  const orderDetails = order.map(item => `${item.name}: $${item.price.toFixed(2)}`);
  const total = order.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  if (orderDetails.length === 0) {
      console.log('No items in the order.');
  } else {
      console.log('Current Order:\n' + orderDetails.join('\n'));
      console.log(`Total: $${total}`);
  }
}

// Example usage:
addToOrder(0); // Add Item 1 to the order
addToOrder(2); // Add Item 3 to the order
viewOrder();   // View the current order
