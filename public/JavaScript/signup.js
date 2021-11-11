// const { sign } = require("cookie-signature");

async function signupForm (event) {
    // // prevent web page auto refresh
    // event.preventDefault();
  
    // // connect variables to the page to collect our data
    // const username = document.querySelector('#username-signup').value.trim();
    // const email = document.querySelector('#email-signup').value.trim();
    // const password = document.querySelector('#password-signup').value.trim();
  
    // // make sure inputs have values
    // if (username && email && password) {
  
    //   // want to fetch our routes from (user-routes.js)
    //   const response =  await fetch('/api/users', {
    //     // send our values received into our post/create function 
    //     method: 'POST',
    //     body: JSON.stringify({
    //       username, 
    //       email, 
    //       password
    //     }),
    //     headers: { " Content-Type": "application/json" }
    //   })
      
    //    // check the response status 
    //   if (response.ok) {
    //     console.log('success');
    //     document.location.replace('/createPost');
    //   } else 
    //   {
    //     // alerts the err 
    //     alert(response.statusText)
    //   }
    // }

    event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
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
  };
document.querySelector('.signup-form').addEventListener('submit', signupForm);