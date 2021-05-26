//helper function to check if user is still logged on 
const withLoggedIn = (req, res, next) => {
    if (req.session.loggedIn) {
      res.redirect('/account');
    } else {
      next();
    }
  };
  
  module.exports = withLoggedIn;