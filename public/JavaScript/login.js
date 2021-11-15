// const { response } = require("express");
// const { User } = require("../../models");


// function for login 
async function loginForm (event) {
  // if session statment
  // if (session)
  console.log("click")


  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  console.log(email)
  console.log(password)

  if (email && password) {
    const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
            email, 
            password
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
}

// listeners
document.querySelector('#signupBtn').addEventListener('click', loginForm);

