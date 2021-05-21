// homepage routes
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Ticket, Concert } = require('../models');


router.get('/', (req, res) => {
    console.log(req.session);
    Concert.findAll({
      attributes: [
        'id',
        'venue_name',
        'concert_name',
        'stock'
      ],
      include: [
        {
          model: Concert,
          attributes: ['id', 'venue_name', 'concert_name', 'stock'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })

      .then(dbPostData => {
        // pass a single post object into the homepage template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;