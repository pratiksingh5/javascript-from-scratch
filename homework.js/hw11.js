// Create a program that takes a user's age as input and determines their life stage (child, teenager, adult, or senior) 
// based on the following criteria:

// Child: 0-12 years
// Teenager: 13-19 years
// Adult: 20-64 years
// Senior: 65+ years

let number = 88;

if(number>=0 && number<=12){
    console.log("CHILD")
}
else if(number>=13 && number<=19){
    console.log("TEENAGER")
}
else if(number>=20 && number<=64){
    console.log("ADULT")
}
else{
    console.log("SENIOR")
}