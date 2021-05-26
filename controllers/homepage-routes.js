// homepage routes
const router = require('express').Router();
const withAuth = require('../utils/auth');
const withLoggedIn = require('../utils/loggedIn');

router.get('/', (req, res) => {
  res.render('homepage');
});

//renders the qr code page in qr_code.handlebars after <view qr code> is selected.
router.get('/qr_code', withAuth, (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  res.render('qr_code');
})

//sign up link unless there is already a session
router.get('/signup', withLoggedIn, (req, res) => {
  res.render('signup');
});

//login unless there is already a session then take to homepage
router.get('/login', withLoggedIn, (req, res) => {
  //render handlebars login page
  res.render('login');
});

module.exports = router;
