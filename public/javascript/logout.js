//user logout
async function logout() {
  //no other parameters necessary as we are destroying the session
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  //after logout take back to home page
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}
//listener for logout button
document.querySelector('#logout').addEventListener('click', logout);