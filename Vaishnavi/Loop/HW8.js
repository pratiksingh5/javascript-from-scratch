// 8. Find and print the index of a specific element in the array. For example, find the index of 3
// Output: 2
let numbers = [1, 2, 3, 4, 5];
let target = 3;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        console.log(i);
        break; 
    }
}
