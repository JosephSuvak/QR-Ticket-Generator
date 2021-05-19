const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//cookie session
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // if we want to set a timelimit to the cookie session,
    //this is 5 minutes so far
    // maxAge: 60 * 1000 * 5
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//express using database, cookies
app.use(session(sess));

//helper functions later for handlebars as we make them
// const helpers = require('./utils/helpers');


//handlebars using helper functions
const hbs = exphbs.create({ });

//set handlebars as view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//controllers and api for handlebars
app.use(require('./controllers/'));


//database and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
