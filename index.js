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
    const confirmPassword = document.getElementById('confirmPassword').value;

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    let validFields = false;

    if (firstName.length < 3) {
        firstNameError.innerText = 'At least 3 characters';
        firstNameError.classList.add('fieldsError');
        validFields = true;
    }
    else {
        firstNameError.innerText = '';
        validFields = false;
    }
    if (lastName.length < 3) {
        lastNameError.innerText = 'At least 3 characters';
        lastNameError.classList.add('fieldsError');
        validFields = true;
    }
    else {
        lastNameError.innerText = '';
        validFields = false;
    }
    if (!email.includes('@') || email.length < 3) {
        emailError.innerText = 'Incorrect E-mail';
        emailError.classList.add('fieldsError');
        validFields = true;
    }
    else {
        emailError.innerText = '';
        validFields = false;
    }
    if (password !== confirmPassword) {
        passwordError.innerText = 'Passwords do not match';
        confirmPasswordError.innerText = 'Passwords do not match';
        passwordError.classList.add('fieldsError');
        confirmPasswordError.classList.add('fieldsError');
        validFields = true;
    }
    else {
        passwordError.innerText = '';
        confirmPasswordError.innerText = '';
        validFields = false;
    }
    if (password.length < 8) {
        passwordError.innerText = 'At least 8 characters';
        passwordError.classList.add('fieldsError');
        validFields = true;
    }
    else {
        passwordError.innerText = '';
        validFields = false;
    }
    if (confirmPassword.length < 8) {
        confirmPassword.innerText = 'At least 8 characters';
        confirmPassword.classList.add('fieldsError');
        validFields = true;
    }
    else {
        confirmPassword.innerText = '';
        validFields = false;
    }
    console.log(users, validFields);
    if (validFields === false) {
        users.push({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
        saveUserToLocalStorage();
        alert('Registration Successful!');
        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
    }
    else {
        return;
    }
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


