/* eslint-disable */
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.session.destroy((err) => {
      if (err) return next(err)
      req.logout()
      res.sendStatus(200)
    })
    res.redirect("/api/login");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  //---PANTRYS----
  app.get("/api/users/:UserId/pantrys", function (req, res) {
    db.Pantry.findAll({
      raw: true,
      where: {
        UserId: req.params.UserId
      }
    }).then(function (dbPantrys) {
      console.log(dbPantrys);
    });
  });

  
  app.delete("/api/pantrys/:id", function (req, res) {
    db.Pantry.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPantrys) {
      console.log(dbPantrys);
    });
  });

  app.post("/api/pantrys", function (req, res) {
    db.Pantry.create({
      ein: req.body.ein,
      charityName: req.body.charityName,
      address1: req.body.address1,
      address1: req.body.address1,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      wishlist: req.body.wishlist,
      UserId: req.body.UserId
    }).then(function (dbPantrys) {
      console.log(dbPantrys);
    });
  });


  //---DONATES----
  app.get("/api/users/:UserId/donates", function (req, res) {
    db.Pantry.findAll({
      raw: true,
      where: {
        UserId: req.params.UserId
      }
    }).then(function (dbPantrys) {
      console.log(dbPantrys);
    });
  });

  app.delete("/api/donates/:id", function (req, res) {
    db.Pantry.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPantrys) {
      console.log(dbPantrys);
    });
  });

  app.post("/api/donates", function (req, res) {
    db.Pantry.create({
      ein: req.body.ein,
      charityName: req.body.charityName,
      address1: req.body.address1,
      address1: req.body.address1,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      wishlist: req.body.wishlist,
      UserId: req.body.UserId
    }).then(function (dbPantrys) {
      console.log(dbPantrys);
    });
  });

};