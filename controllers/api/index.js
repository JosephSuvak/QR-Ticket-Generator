const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const concertRoutes = require('./concert-routes');
const ticketRoutes = require('./ticket-routes');

router.use('/user', userRoutes);
router.use('/concert', concertRoutes);
router.use('/ticket', ticketRoutes);

module.exports = router;