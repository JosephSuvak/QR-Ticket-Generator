//display concerts 
async function concert() {
  const response = await fetch('/api/concert', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  //after logout take back to account page
  if (response.ok) {
    document.location.replace('api/concert');
  } else {
    alert(response.statusText);
  }
}
//listener for concert list button
document.querySelector('#concert').addEventListener('click', concert);