// 7.Find and print the largest number in the given array.
// Output: 11
let numbers = [8, 3, 11, 6, 2];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(largest);
