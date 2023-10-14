// Create a program that determines the grade of a student based on their marks. 
// Consider grades A (90+), B (80-89), C (70-79), D (60-69), E (60 - 33) and F (below 33).

let number = 77;

if(number>=0 && number<=100){
    if (number>=90){
        console.log("Grade A is given to the student")
    }
    else if(number>=80 || number<=89){
        console.log("Grade B is given to the student")
    }
    else if(number>=70 || number<=79){
        console.log("Grade C is given to the student")
    }
    else if(number>=60 || number<=69){
        console.log("Grade D is given to the student")
    }
    else if(number<=60 || number>=33){
        console.log("Grade E is given to the student")
    }
    else{
        console.log("Grade F is given to the student")
    }
}
else{
    console.log("Invalid Marks")
}
