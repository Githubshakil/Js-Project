const users = [
    { id: 1, name: "Alice", age: 25, isActive: true, scores: [85, 92, 88] },
    { id: 2, name: "Bob", age: 30, isActive: false, scores: [70, 75, 80] },
    { id: 3, name: "Charlie", age: 35, isActive: true, scores: [95, 90, 93] },
    { id: 4, name: "Diana", age: 28, isActive: true, scores: [60, 65, 70] },
    { id: 5, name: "Eve", age: 40, isActive: false, scores: [80, 85, 88] }
];





function process(){
    let activeUsers = users.filter(user=>user.isActive == true);
   activeUsers.map(user=>{
    let total = user.scores.reduce((a,b)=>a+b,0);
    let average = total/user.scores.length;
    user.averageScore = average
    
    
 })

   let topper = activeUsers.reduce((a,b)=>a.averageScore > b.averageScore ? a : b)
   
   let ageGroups ={
    under30:users.filter(user=>user.age<30),
    over30: users.filter(user=>user.age>=30)
   }
   return{
    activeUsers:activeUsers,
    topPerformer:topper,
    agegroup:ageGroups


   }
}
console.log(process());

