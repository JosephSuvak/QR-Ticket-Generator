//add a concert to the user account
async function newDeleteTicketHandler(event) {
  event.preventDefault();

  //only need id which we get from url
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];
  console.log(id);
  const response = await fetch(`/api/ticket/${id}`, {
    method: 'DELETE'
  });
  //after deleting take to user comments to display successful deletion
  if (response.ok) {
    document.location.replace('/account');
  } else {
    alert(response.statusText);
  }
}
//create new post listener
document.querySelector('#delete_ticket').addEventListener('click', newDeleteTicketHandler);