const axios = require('axios');
const db = require('../models');
require('dotenv').config();
const passport = require('../config/passport');

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post('/api/login', passport.authenticate('local'), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    return res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/api/signup', function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(function() {
        res.redirect(307, '/api/login');
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get('/logout', function(req, res) {
    console.log("log out")
    req.session.destroy(err => {
      if (err) return res.json(err);
      req.logout();
      res.sendStatus(200);
    });
  });

  // Route for getting some data about our user to be used client side
  app.get('/api/user_data', function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });
  //---Wishes----
  app.get("/api/wishes", function (req, res){
    db.Wish.findAll({
      }).then(function (dbData) {
        return res.json(dbData);
    });
  });

  //---DONATES----
  app.get("/api/donates/:UserId", function (req, res) {
    // app.get("/api/donates", function (req, res)
    {
      db.Donate
        .findAll({
          where: {
            UserId: req.params.UserId
          }
        })
        .then(function (dbData) {
          console.log(dbData);
          return res.json(dbData);
        }).catch((err) => console.log(err)
        );
    };

    app.post(`/api/donates/`, function (req, res) {
      db.Donate.create({
        item: req.body.item,
        qty: req.body.qty,
        UserId: req.body.UserId
      }).then(function (dbData) {
        return res.json(dbData);
      }).catch((err) => console.log(err)
      );
    })

    app.post("/getpantries", function (req, res) {
      const BASEURL = "https://api.data.charitynavigator.org/v2/Organizations?";
      const APP_KEY = process.env.REACT_APP_APP_KEY;
      const APP_ID = process.env.REACT_APP_APP_ID;
      const category = "food+pantry";
      const resultCount = 8;
      console.log("vars:",process.env.REACT_APP_APP_KEY, process.env.REACT_APP_APP_ID);
      let url = `${BASEURL}app_id=${APP_ID}&app_key=${APP_KEY}&pageSize=${resultCount}&search=${category}&state=${req.body.state}&city=${req.body.city}`;
      axios.get(url).then(
        apiData => {
          return res.json(apiData.data);
        }).catch((err) => console.log(err)
        );
    })
  });
};
