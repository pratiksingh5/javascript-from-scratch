// 11. Create a program that takes a user's age as input and determines their life stage (child, teenager, adult, or senior) based on the following criteria:

//Child: 0-12 years
//Teenager: 13-19 years
//Adult: 20-64 years
//Senior: 65+ years

var age = 20;

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 64) {
    console.log("Adult");
} else {
    console.log("Senior");
}
