//add a concert to the user account
async function newQRHandler(event) {
  event.preventDefault();


  //get new qr ticket for concert
  const id = document.querySelector('input[name="singleTicketID"]').value;

  //create new
  const response = await fetch(`/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  //if ok go where you should see the new qr code
  if (response.ok) {
    document.location.replace('/qr_code');
  } else {
    alert(response.statusText);
  }
}
//create new post listener
document.querySelector('#qr_ticket').addEventListener('click', newQRHandler);