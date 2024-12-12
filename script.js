const users = [
{ username: 'admin', password: 'admin123', role: 'admin' },
{ username: 'user', password: 'user123', role: 'user' }
];

function login() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

const user = users.find(u => u.username === username && u.password === password);

if (user) {
if (user.role === 'admin') {
    window.location.href = 'index.html';
} else if (user.role === 'user') {
    window.location.href = 'user.html';
}
} else {
alert('Invalid credentials');
}
}
function logout() {
    window.location.href = 'login.html';
}

