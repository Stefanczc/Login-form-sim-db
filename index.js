const registerBtn = document.getElementById('register');
const signInBtn = document.getElementById('signInBtn');
const signInForm = document.getElementById('signInForm');
const signInLink = document.getElementById('signInLink');
const signUpForm = document.getElementById('signUpForm');
let users = JSON.parse(localStorage.getItem('users')) || [];

function addUser() {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            alert('Email is already in use');
            return;
        }
    }
    users.push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });
    saveUserToLocalStorage();
    alert('Registration Successful!');
}

function signInUser(e) {
    e.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email || users[i].password === password) {
            alert('LogIn succesful!');
            return;
        }
    }
    alert('Incorrect Credentials');
}

function openSignIn(e) {
    e.preventDefault();
    signInForm.classList.toggle('signInFormOpen');
}

function saveUserToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

registerBtn.addEventListener('click', addUser);
signInBtn.addEventListener('click', signInUser);
signInLink.addEventListener('click', openSignIn)



