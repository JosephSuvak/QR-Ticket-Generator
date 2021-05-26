// homepage routes
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Ticket, Concert } = require('../models');
const chalk = require('chalk');
const QRCode = require('qrcode');
const withAuth = require('../utils/auth');
const withLoggedIn = require('../utils/loggedIn');

router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    Concert.findAll({
      attributes: [
        'id',
        'venue_name',
        'concert_name',
        'concert_date',
        'stock'
      ]
    })
      .then(dbConcertData => {
        // pass a single post object into the homepage template
        const concerts = dbConcertData.map(concert => concert.get({ plain: true }));
        res.render('homepage', {
          concerts,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
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
