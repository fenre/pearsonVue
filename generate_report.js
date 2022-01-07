var arrayLength = result.exam.reportingGroups.length;
var scoreCalc = 0;
console.log("The exam you took was: " + result.exam.title);
console.log("The score you've got is: " + result.exam.score);
console.log("This results in a " + result.exam.grade + " for the exam.");
console.log("Here's a breakdown of your results per topic:")

for (var i = 0; i < arrayLength; i++) {
var resultGroup = result.exam.reportingGroups[i];
console.log(resultGroup["title"] + " - " + resultGroup["score"]);
scoreCalc += parseInt(resultGroup["score"]);
}
console.log("Your score based on the topics is: " + (scoreCalc / arrayLength));
