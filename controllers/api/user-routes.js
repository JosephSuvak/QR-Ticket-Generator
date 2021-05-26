// api routes to get data from the user table
const router = require('express').Router();
const { User, Ticket, Concert } = require('../../models');
const withAuth = require('../../utils/auth');

// getting all users...
router.get('/', withAuth, (req, res) => {
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
router.get('/:id', withAuth, (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Ticket,
                attributes: ['id','concert_id'],
                include: {model: Concert, 
                    attributes: ['concert_name', 'concert_date']
                }
            },

        ]
    })
});

//create user
router.post('/', withAuth, (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => {
            //create cookie session
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.email = dbUserData.email;
                req.session.loggedIn = true;

                res.json(dbUserData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//login user: need to create a session and we can't find their id until we 
//have access in another way so, email
router.post('/login', withAuth, (req, res) => {
    console.log('=============');
    console.log(req.body);
    console.log('=============');
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user found!' });
            return;
        }

        //validate the password
        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        //save session
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//logout user and destroy cookie session
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;