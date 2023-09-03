const registerBtn = document.getElementById('register');
let users = JSON.parse(localStorage.getItem('users')) || [];

function addUser() {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    users.push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });
    saveUserToLocalStorage();
    alert('Registration Successfull!');
}

function saveUserToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

registerBtn.addEventListener('click', addUser);



