//2. Write a JavaScript program to find the largest of three numbers.
let num1 = 10;
let num2 = 5;
let num3 = 8;
let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}

console.log("The largest number is: " + largest);
