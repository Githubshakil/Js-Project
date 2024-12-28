//students array
const students = [
  { id: 1, name: "John", scores: [85, 78, 92] },
  { id: 2, name: "Sara", scores: [62, 70, 68] },
  { id: 3, name: "Emma", scores: [90, 95, 94] },
  { id: 4, name: "Tom", scores: [50, 48, 55] },
];

//average score function

function calculateAverage(scores) {
  return scores.reduce((a, b) => a + b) / scores.length;
}
//   console.log(averageScore([85, 78, 92]));

// student with highest average score

function highestAverageScore(students) {
  return students.map((student) => {
    let average = calculateAverage(student.scores);
    let status = average >= 60 ? "PASSED" : "FAILED";
    return {
      id: student.id,
      name: student.name,
      average: average,
      status: status,
    };
  });
}
// console.log(highestAverageScore(students));

// highest average score

function topScorer(students) {
  let highest = students[0];
  let highestAverage = calculateAverage(students[0].scores);

  for (let i = 1; i < students.length; i++) {
    let currentAverage = calculateAverage(students[i].scores);
    if (currentAverage > highestAverage) {
      highest = students[i];
      highestAverage = currentAverage;
    }
  }
  return highest;
}
// console.log(topScore(students));

// class performance
function classPerformance(students) {
  let averageScore = students.map((students) =>
    calculateAverage(students.scores)
  );
  let classAverage = calculateAverage(averageScore);

  if (classAverage >= 80) {
    return "EXCELLENT";
  } else if (classAverage >= 70) {
    return "GOOD";
  } else {
    return "NEEDS IMPROVEMENT";
  }
}
// console.log(classPerformance(students));

// students result

let highestStudentScore = highestAverageScore(students);
console.log(highestStudentScore);
let topScore = topScorer(students);
console.log(topScore);
let classPerformer = classPerformance(students);
console.log(classPerformer);
