// 10. Check if a specific element exists in an array and print "Found" if it does, or "Not Found" if it doesn't.
let numbers = [1, 2, 3, 4, 5];
let target = 3;
let found = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        found = true;
        break; 
    }
}
if (found) {
    console.log("Found");
} else {
    console.log("Not Found");
}
