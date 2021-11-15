const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path')
// for session
const session = require('express-session');

// for handle bars 
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });


// for session
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  // resave: forces the session back to the session store even if the cookie hasnt been modified 
  resave: false,
  // saveUninitialized: when new session it will be saved as the store
  saveUninitialized: true,
  // store: creates the connect with the DB, setup the session table, and allow sequelize to save session into DB
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;

// use our sesstion
app.use(session(sess));

// for handle bars 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'assets')));


// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});

// ------------------- back end 
//  npm install 
//  npm init 
//  npm i express
//  npm i sequelize
//  npm i mysql2
//  npm i dotenv ()
//  npm i bcrypt
//  npm i --save-dev nodemon
//  npm i express-session (connects to back end)
//  npm i connect-session-sequelize (automatically stores the sessions created by express-session)

// ------------------- package.json
// "scripts": {
  // "watch": "nodemon server.js"
// }
// npm run watch


// ------------------- front end 
// npm install express-handlebars