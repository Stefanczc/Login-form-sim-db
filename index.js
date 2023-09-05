const registerBtn = document.getElementById('register');
const signInBtn = document.getElementById('signInBtn');
const signInForm = document.getElementById('signInForm');
const signInLink = document.getElementById('signInLink');
const signUpForm = document.getElementById('signUpForm');
const backToRegBtn = document.getElementById('backToRegBtn');
let users = JSON.parse(localStorage.getItem('users')) || [];

function addUser(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    const fieldsList = [];
    const errorsList = [];

    fieldsList.push(firstName);
    errorsList.push(firstNameError);
    fieldsList.push(lastName);
    errorsList.push(lastNameError);
    fieldsList.push(email);
    errorsList.push(emailError);
    fieldsList.push(password);
    errorsList.push(passwordError);

    // for (let i = 0; i < users.length; i++) {
    //     if (users[i].email === email) {
    //         alert('Email is already in use');
    //         return;
    //     }
    // }
    users.push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });

    for (let i = 0; i < fieldsList.length; i++) {
        if (fieldsList[i].length < 1) {
            errorsList[i].innerText = 'Field is required';
            errorsList[i].classList.add('firstNameError');
        }
        else {
            errorsList[i].innerText = '';
            errorsList[i].classList.remove('firstNameError');
        }
    }
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
    signUpForm.classList.add('signUpFormFade');
    signInForm.classList.add('signInFormOpen');
}

function saveUserToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

registerBtn.addEventListener('click', addUser);
signInBtn.addEventListener('click', signInUser);
signInLink.addEventListener('click', openSignIn)
backToRegBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.classList.remove('signUpFormFade');
    signInForm.classList.remove('signInFormOpen');
})


