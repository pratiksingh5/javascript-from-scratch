// 9. Write a program that checks if a given number is a prime number or not.
const number = 17;
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}
