// api routes for concert data
const router = require('express').Router();
const { Concert } = require('../../models');

// getting all concerts...
router.get('/', (req, res) => {
    Concert.findAll({
        attributes: ['id', 'venue_name', 'concert_name', 'stock']
    })
        .then(dbConcertData => res.json(dbConcertData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// getting concerts by id...
router.get('/:id', (req, res) => {
    Concert.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Ticket,
                attributes: ['id', 'user_id', 'concert_id']
            },

        ]
    })
});

module.exports = router;