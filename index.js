const registerBtn = document.getElementById('register');
const signInBtn = document.getElementById('signInBtn');
const signInForm = document.getElementById('signInForm');
const signInLink = document.getElementById('signInLink');
const signUpForm = document.getElementById('signUpForm');
const backToRegBtn = document.getElementById('backToRegBtn');
const cbox = document.getElementById('cbox');
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
    const cboxError = document.getElementById('cboxError');

    let validFields = false;

    if (firstName.length < 3) {
        firstNameError.innerText = 'At least 3 characters';
        validFields = false;
    }
    else {
        firstNameError.innerText = '';
        validFields = true;
    }
    if (lastName.length < 3) {
        lastNameError.innerText = 'At least 3 characters';
        validFields = false;
    }
    else {
        lastNameError.innerText = '';
        validFields = true;
    }
    if (!email.includes('@') || email.length < 3) {
        emailError.innerText = 'Incorrect E-mail';
        validFields = false;
    }
    else {
        emailError.innerText = '';
        validFields = true;
    }
    if (password !== confirmPassword || password.length < 8) {
        passwordError.innerText = 'Passwords do not match';
        confirmPasswordError.innerText = 'Passwords do not match';
        validFields = false;
    }
    else {
        passwordError.innerText = '';
        confirmPasswordError.innerText = '';
        validFields = true;
    }
    if (!cbox.checked) {
        cboxError.innerText = 'You need to agree with the documents';
        validFields = false;
    }
    else {
        cboxError.innerText = '';
    }

    if (validFields === true) {
        users.push({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
        saveUserToLocalStorage();
        openSignIn(e);
        alert('Registration Successful!');
        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
        cboxError.innerText = '';
        cbox.checked = false;
    }
    else {
        return;
    }
}

function signInUser(e) {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            return alert('LogIn successful!');
        }
    }
    e.preventDefault();
    return alert('Incorrect Credentials');
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




