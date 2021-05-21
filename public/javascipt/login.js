//login user
async function loginFormHandler(event) {
  event.preventDefault();
  //email value
  const email = document.querySelector('#email-login').value.trim();
  //password value
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    // if user exist and password is there and correct take them to their account
    if (response.ok) {
      document.location.replace('/account/');
    } else {
      alert(response.statusText);
    }
  }
}
//login button listener
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);