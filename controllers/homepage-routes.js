// homepage routes
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Ticket, Concert } = require('../models');


router.get('/', (req, res) => {
    console.log(req.session);
    Concert.findAll({
      attributes: [
        'id',
        'venue_name',
        'concert_name',
        'stock'
      ]
    })
      .then(dbConcertData => {
        // pass a single post object into the homepage template
        const concerts = dbConcertData.map(concert => concert.get({ plain: true }));
        res.render('homepage', { concerts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});
  
//sign up link unless there is already a session
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

//login unless there is already a session then take to homepage
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  //render handlebars login page
  res.render('login');
});

  module.exports = router;