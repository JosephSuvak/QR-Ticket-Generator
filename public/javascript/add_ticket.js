//add a concert to the user account
async function newTicketHandler(event) {
  event.preventDefault();
  
  
  //get new ticket for concert
  const user_id = document.querySelector('input[name="singleConcertUser"]').value;

  const concert_id = document.querySelector('input[name="singleConcertID"]').value;

  //create new
  const response = await fetch(`/account/add`, {
    method: 'POST',
    body: JSON.stringify({
      user_id,
      concert_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  //if ok go to dashboard where you should see the new post
  if (response.ok) {
    document.location.replace('/account');
    stockDecreaser();
  } else {
    alert(response.statusText);
  }
}

async function removeTicketFromStockHandler(event) {
  event.preventDefault();

  const oldStock = document.querySelector('#stock').value; 
  // Get new stock (current - 1);
  const stock = oldStock - 1;
  console.log(oldStock);
  console.log(stock);
    fetch(`/api/concert/${concert_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      stock: stock
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(ConcertDataResponse => {
    console.log(ConcertDataResponse);

  })
  .catch(err => {
    console.log(err);
  });
}


// const stockDecreaser = () => {
//   const oldStock = document.querySelector('#stock').value;

//   const stock = oldStock - 1;

//   console.log(stock);
//   const concert_id = document.querySelector('input[name="singleConcertID]').value

//   fetch(`/api/concert/${concert_id}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       stock
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(ConcertDataResponse => {
//     console.log(ConcertDataResponse);

//   })
//   .catch(err => {
//     console.log(err);
//   });
//}
//create new post listener
document.querySelector('#single_concert').addEventListener('click', newTicketHandler, removeTicketFromStockHandler);