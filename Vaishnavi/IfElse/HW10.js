// 10. Write a program that determines the type of a triangle (equilateral, isosceles, or scalene) based on the lengths of its three sides.

var side1 = 20;
var side2 = 10;
var side3 = 20;

if (side1 === side2 && side2 === side3) {
    console.log("Equilateral triangle");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles triangle");
} else {
    console.log("Scalene triangle");
}
