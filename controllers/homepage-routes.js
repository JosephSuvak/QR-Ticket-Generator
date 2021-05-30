// homepage routes
const router = require('express').Router();
const withAuth = require('../utils/auth');
const withLoggedIn = require('../utils/loggedIn');
const { Ticket, Concert } = require('../models');
const chalk = require('chalk');

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

//validate the qrcode 
//this is not fully functional yet, as we require authorization to view tickets, and the 
// different get routes will throw errors as this one will always be activated with the other api routes. this should
//be accessed by an admin user or seperate program/api-route that has access to the same db.


// router.get('/:id', (req, res) => {
//   console.log(chalk.magentaBright(req.params.id))
//   Ticket.findOne({
//     where: {
//       id: req.params.id
//     },
//     include: [
//       {
//         model: Concert,
//         attributes: ['id', 'venue_name', 'concert_name', 'concert_date']
//       }
//     ]
//   })
//     .then(dbTicketData => {
//       const ticket = dbTicketData.get({ plain: true });
//       //render handlebars home page
//       res.render('validate_ticket', {
//         ticket,
//         loggedIn: req.session.loggedIn,
//         user_id: req.session.user_id
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// })


module.exports = router;
