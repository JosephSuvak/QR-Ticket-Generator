// api routes to access ticket data

const router = require('express').Router();
const { Ticket, User, Concert } = require('../../models');

// getting all tickets...
router.get('/', (req, res) => {
    Ticket.findAll({

    })
        .then(dbTicketData => res.json(dbTicketData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// getting tickets by id...
router.get('/:id', (req, res) => {
    Ticket.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Concert,
                attributes: ['id', 'venue_name', 'concert_name']
            },
            {
                model: User,
                attributes: ['id', 'email']
            }
        ]
    })
    .then(dbTicketData => {
        if(!dbTicketData) {
            res.status(404).json({ message: 'No ticket found with this id' });
            return;
        }
        res.json(dbTicketData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;