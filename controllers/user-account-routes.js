// specific to a single user account routes
const router = require('express').Router();
const { User, Ticket, Concert } = require('../models');
//check for a cookie session before giving them access
const withAuth = require('../utils/auth');
const chalk = require('chalk');


// get all tickets for user account
router.get('/', withAuth, (req, res) => {
    console.log('======================');
    console.log(chalk.cyan(req.session.user_id));
    Ticket.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'user_id',
            'concert_id'
        ],
        include: [
            {
                model: Concert,
                attributes: ['id', 'venue_name', 'concert_name', 'stock', 'concert_date'],
            }

        ]
    })
        //render all tickets to the account that belong to the current user
        .then(dbTicketData => {
            const tickets = dbTicketData.map(ticket => ticket.get({ plain: true }));
            res.render('account', { tickets, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//add a ticket to user account through concert_id
router.post('/add', withAuth, (req, res) => {
    Ticket.create({
        user_id: req.body.user_id,
        concert_id: req.body.concert_id
    })
        .then(dbTicketData => {
            res.json(dbTicketData);
        })
        .catch(err => {

            console.log(chalk.redBright(err + 'This error is coming from user-account-routes.js, in the Ticket.create method.'));
            res.status(500).json(err);
        });

});

// getting all users...
router.get('/user', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// getting users by id...
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Ticket,
                attributes: ['id', 'user_id', 'concert_id']
            },
            {
                model: Concert,
                attributes: ['id', 'venue_name', 'concert_name', 'stock', 'concert_date']
            }

        ]
    })
});



module.exports = router;