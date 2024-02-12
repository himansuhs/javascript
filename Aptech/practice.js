// Array to store bill records
const bills = [];

// Function to add a new bill
function addBill() {
    const name = prompt("Enter bill name:");
    const amount = parseFloat(prompt("Enter bill amount:"));

    if (!isNaN(amount)) {
        bills.push({ name, amount });
        alert("Bill added successfully!");
    } else {
        alert("Invalid amount. Please enter a valid number.");
    }
}

// Function to view all bills
function viewBills() {
    let output = "All Bills:\n";
    if (bills.length === 0) {
        output += "No bills available.";
    } else {
        for (const bill of bills) {
            output += `${bill.name}: $${bill.amount.toFixed(2)}\n`;
        }
    }

    console.log(output);
}

// Function to calculate the total amount of all bills
function calculateTotal() {
    const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);
    alert(`Total amount of all bills: $${totalAmount.toFixed(2)}`);
}

// Example usage:
addBill();
addBill();
viewBills();
calculateTotal();
