// 7. Create a program that determines the grade of a student based on their marks. Consider grades A (90+), B (80-89), C (70-79), D (60-69), E (60 - 33) and F (below 33).


let marks =  -5;

if( marks > 0 && marks < 100){
    if(marks > 90){
        console.log('Grade A')
    }
    else if(marks > 80){
        console.log("Grade B")
    }
    else{
        console.log("")
    }
}
else{
    console.log("Invalid Marks")
}

