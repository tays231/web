const sign_in = document.querySelector("#sign-in-btn");
const sign_up = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

sign_in.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('signInUserName').value;
    const password = document.getElementById('signInPassword').value;

    if (userName === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    alert('Sign In Successful');
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('signUpUserName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    if (userName === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email');
        return;
    }

    alert('Sign Up Successful');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
