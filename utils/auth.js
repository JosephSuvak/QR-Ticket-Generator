//helper function to check if user is still logged on 
const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login');
    next();
  } else {
    next();
  }
};

module.exports = withAuth;