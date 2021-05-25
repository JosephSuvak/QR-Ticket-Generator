//add a concert to the user account
async function newTicketHandler(event) {
  event.preventDefault();
  
  
  //get new ticket for concert
  const user_id = document.querySelector('input[name="singleConcertUser"]').value;

  const concert_id = document.querySelector('input[name="singleConcertID"]').value;

  const concert = document.querySelector('input[name="concertName"]').value;

  //create new
  const response = await fetch(`/account/add`, {
    method: 'POST',
    body: JSON.stringify({
      user_id,
      concert_id,
      concert
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  //if ok go to dashboard where you should see the new post
  if (response.ok) {
    document.location.replace('/account');
  } else {
    alert(response.statusText);
  }
}
//create new post listener
document.querySelector('#single_concert').addEventListener('click', newTicketHandler);