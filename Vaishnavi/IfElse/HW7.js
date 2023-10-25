// 7. Create a program that determines the grade of a student based on their marks. Consider grades A (90+), B (80-89), C (70-79), D (60-69), E (60 - 33) and F (below 33).

const marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else if (marks >= 33) {
    console.log("Grade E");
} else {
    console.log("Grade F");
}
