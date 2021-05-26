//helper functions to put new date in the desired format,
//and to pluralize the words concert/tickets based on the number of concert/tickets there are
//we do not use this very much currently, but based on how a date could be recieved for a concert, I will leave it
module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  }
}