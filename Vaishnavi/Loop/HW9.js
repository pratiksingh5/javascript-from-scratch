// 9. Count the number of even numbers in an array.
let numbers = [1, 2, 3, 4, 5];
let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    }
}
console.log(evenCount);
