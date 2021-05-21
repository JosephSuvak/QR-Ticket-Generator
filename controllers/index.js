const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homepage-routes.js');
//const userAccountRoutes = require('./user-account-routes');

//routes for the javascript/handlebars files to use
//router.use('/dashboard', userAccountRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);



module.exports = router;