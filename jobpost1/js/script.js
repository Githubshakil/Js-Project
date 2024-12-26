const users = [
    { id: 1, name: "Alice", age: 25, isActive: true, scores: [85, 92, 88] },
    { id: 2, name: "Bob", age: 30, isActive: false, scores: [70, 75, 80] },
    { id: 3, name: "Charlie", age: 35, isActive: true, scores: [95, 90, 93] },
    { id: 4, name: "Diana", age: 28, isActive: true, scores: [60, 65, 70] },
    { id: 5, name: "Eve", age: 40, isActive: false, scores: [80, 85, 88] }
];

function displayUsers(users) {
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `<h2>${user.name} (Age: ${user.age})</h2>
                             <p>ID: ${user.id}</p>
                             <p>Active: ${user.isActive ? 'Yes' : 'No'}</p>
                             <p>Scores: ${user.scores.join(', ')}</p>`;
        usersDiv.appendChild(userDiv);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayUsers(users);
});
