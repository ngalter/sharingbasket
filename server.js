// Requiring necessary npm packages
const express = require('express');
const session = require('express-session');
require('dotenv').config();
// Requiring passport as we've configured it
const path = require('path');
const passport = require('./config/passport');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require('./models');

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the React app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require('./routes/api-routes.js')(app);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: false }).then(function() {
  // Start the API server
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
