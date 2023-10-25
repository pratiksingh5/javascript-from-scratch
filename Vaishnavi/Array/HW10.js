// 10. Create an array of exam scores. If the average score is greater than or equal to 70, print "Congratulations! You passed the exam!" Otherwise, print "Sorry, you did not pass the exam. Study harder!"

const examScores = [85, 72, 90, 60, 78];
const sum = examScores.reduce((acc, score) => acc + score, 0);
const average = sum / examScores.length;

if (average >= 70) {
  console.log("Congratulations! You passed the exam!");
} else {
  console.log("Sorry, you did not pass the exam. Study harder!");
}
