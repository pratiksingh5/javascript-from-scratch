// 5. Create a program that calculates the total cost of purchasing a product. If the quantity purchased is more than 10, apply a 10% discount; otherwise, no discount is applied.

let quantity = 5;
let price = 200;

// price ---> 90 

if(quantity > 10){
    price = price - (10/100 * price);
    console.log("Discount Applied" , price)
}
else{
    console.log("No Discount Applied")
}