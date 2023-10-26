// 5. Create a program that calculates the total cost of purchasing a product. If the quantity purchased is more than 10, apply a 10% discount; otherwise, no discount is applied.


const quantity = 20;
const price = 15;
const totalCost = quantity > 10 ? quantity * price * 0.9 : quantity * price;
console.log("Total cost: " + totalCost);
