let employees = [
  { id: 1, name: "Alice", tasksCompleted: 20, rating: 3.2 },
  { id: 2, name: "Bob", tasksCompleted: 30, rating: 3.9 },
  { id: 3, name: "Charlie", tasksCompleted: 70, rating: 4.5 },
  { id: 4, name: "Diana", tasksCompleted: 50, rating: 4.8 },
];

// function calculate bonuse
function calculateBonuses(employees) {
  let results = [];
//   console.log(employees);

  //loop array of employe
  for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];
    

    //employee bonuse
    
    if (employee.tasksCompleted >= 40 && employee.rating >= 4.0) {
      let bonus = employee.tasksCompleted * 10;
      results.push({
        id: employee.id,
        name: employee.name,
        bonus: bonus,
      });
    }
  }

//   console.log(results);
  return results;
}
let bonuses = calculateBonuses(employees);

console.log("employee bonuses:", bonuses);

