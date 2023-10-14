// Write a js program that determines the type of a triangle (equilateral, isosceles, or scalene) based on the lengths of its three sides.


let s1=5;
let s2=6;
let s3=7;

if(s1==s2 && s2==s3){
    console.log("Equilateral Triangle")
}
else if(s1==s2 || s2==s3 || s3==s1){
    console.log("isoscceles Triangle")
}
else{
    console.log("Scalene Triangle")
}
