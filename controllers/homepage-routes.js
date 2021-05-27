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

//validate the qrcode as an example
router.get('/:id',  (req, res) => {
  console.log(chalk.magentaBright(req.params.id))
  Ticket.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Concert,
        attributes: ['id', 'venue_name', 'concert_name', 'concert_date']
      }
    ]
  })
    .then(dbTicketData => {
      if (!dbTicketData) {
        console.log(chalk.redBright('No ticket located this is ticket-routes.'))
      }
      const ticket = dbTicketData.get({ plain: true });
      //render handlebars home page
      res.render('validate_ticket', {
        ticket,
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})


module.exports = router;
