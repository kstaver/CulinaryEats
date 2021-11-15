const logoutBtn = document.querySelector("#logout");


async function logout() {
  // 
  const response = await fetch('/api/users/logout', {
    method: 'post', 
    headers: { 'Content-Type': 'application/json' }
  });

  // check out response 
  if(response.ok) {
    // if okay send user back to homepage 
    document.location.replace('/');
    console.log("success")
  } else {
    alert(response.statusText);
  }
};

logoutBtn.addEventListener('click', logout())