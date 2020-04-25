// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
require('dotenv').config();
// Requiring passport as we've configured it
var path = require("path");
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 3001;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));


// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes

require("./routes/api-routes.js")(app);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(function() {
 // Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
});

// app.listen(PORT, function() {
//   console.log(
//     "==> 🌎  Listening on port %s. Visit http://l ocalhost:%s/ in your browser.",
//     PORT,
//     PORT
//   );
// });
