// 9. Create an array of 5 random numbers. Check if the first number is greater than the last number. If true, print the first number, else print the last number.

const numbers = [15, 9, 22, 30, 7];
if (numbers[0] > numbers[numbers.length - 1]) {
  console.log(numbers[0]);
} else {
  console.log(numbers[numbers.length - 1]);
}
