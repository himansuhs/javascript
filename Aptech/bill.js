// Menu items with their prices
const menu = [
  { name: 'Item 1', price: 10.99 },
  { name: 'Item 2', price: 8.49 },
  { name: 'Item 3', price: 12.99 },
  { name: 'Item 4', price: 15.99 }
];

// Array to store the customer's order
const order = [];

// Function to add an item to the order
function addToOrder(itemIndex) {
  const selectedItem = menu[itemIndex];

  if (selectedItem) {
      order.push(selectedItem);
      console.log(`${selectedItem.name} added to the order. Price: ${selectedItem.price.toFixed(2)}`);
  } else {
      console.log('Invalid item selection.');
  }
}

// Function to view the current order
function viewOrder() {
  let output = 'Current Order:\n';
  let total = 0;

  if (order.length === 0) {
      output += 'No items in the order.';
  } else {
      order.forEach((item, index) => {
          output += `${index + 1}. ${item.name}: ${item.price.toFixed(2)}\n`;
          total += item.price;
      });

      output += `Total: ${total.toFixed(2)}`;
  }

  console.log(output);
}

// Example usage:
addToOrder(0); // Add Item 1 to the order
addToOrder(2); // Add Item 3 to the order
viewOrder();   // View the current ord
