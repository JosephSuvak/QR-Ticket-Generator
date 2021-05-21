// specific to a single user account routes
const router = require('express').Router();
const { User, Ticket, Concert } = require('../models');
//check for a cookie session before giving them access
const withAuth = require('../utils/auth');


// get all tickets for user account
router.get('/', withAuth, (req, res) => {
    console.log('======================');
    Ticket.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'user_id',
            'concert_id',
            'created_at'
        ],
        include: [
            {
                model: Concert,
                attributes: ['id', 'venue_name', 'concert_name', 'stock', 'created_at'],
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
                attributes: ['id', 'venue_name', 'concert_name']
            }

        ]
    })
});



module.exports = router;