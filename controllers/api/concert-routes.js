// api routes for concert data
const router = require('express').Router();
const { Concert, Ticket, User } = require('../../models');
const chalk = require('chalk');

// getting all concerts and render them to concert.handlebars
// this is called from concert.js which has a listener in
// account.handlebars (the user's after login homepage basically)
// you DO HAVE to pass in all these attributes or they will not be passed to handlebar.
router.get('/', (req, res) => {
    Concert.findAll({
        attributes: ['id', 'venue_name', 'concert_name', 'stock', 'created_at'],
    })
        .then(dbConcertData => {
          
        if (!req.session.loggedIn) {
            res.render('login');
            return;
        }
        const concerts = dbConcertData.map(concert => concert.get({ plain: true }));
        //render handlebars home page
        res.render('concert', {
            concerts,
            loggedIn: req.session.loggedIn,
            user_id: req.session.user_id
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
        attributes: ['id', 'venue_name', 'concert_name', 'stock', 'created_at'],
    })
        .then(dbConcertData => {
            if (!req.session.loggedIn) {
                res.render('login');
                return;
            }
            if (!dbConcertData) {
                console.log(chalk.redBright('No concert located.'))
            }
            const concert = dbConcertData.get({ plain: true });
            //render handlebars home page
            res.render('single_concert', {
                concert,
                loggedIn: req.session.loggedIn,
                user_id: req.session.user_id
            });
        })
        .catch(err => {
            
            console.log(chalk.redBright(err + ' This error is coming from concert-routes.js, in the Concert.findOne method.'));
            res.status(500).json(err);
        });
});

module.exports = router;