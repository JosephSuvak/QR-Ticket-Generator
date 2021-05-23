// api routes for concert data
const router = require('express').Router();
const { Concert } = require('../../models');

/* getting all concerts and render them to concert.handlebars
 this is called from concert.js which has a listener in
 account.handlebars (the user's after login homepage basically)
 you DO HAVE to pass in all these attributes or they will not be passed to handlebar. */
 
router.get('/', (req, res) => {
    Concert.findAll({
        attributes: ['id', 'venue_name', 'concert_name', 'stock', 'created_at']
    })
    .then(dbConcertData => {
            const concerts = dbConcertData.map(concert => concert.get({ plain: true }));
            //render handlebars home page
            res.render('concert', {
                concerts,
                loggedIn: req.session.loggedIn
            });
        })
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
