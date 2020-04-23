var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/api/users/" + req.user.id + "/pantrys");
    }
    res.render("signup", {});
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/api/users/" + req.user.id + "/pantrys");
    }
    res.render("login", {});
  });

  app.get("/logout", function(req, res) {
    console.log(req);
    res.render("login", {});
  });
  app.get("/pantrys", isAuthenticated, function(req, res) {
    console.log(req);
    res.redirect("/api/users/" + req.user.id + "/pantrys");
  });
  app.post("/pantrys", isAuthenticated, function(req, res) {
    console.log(req);
    res.redirect("/api/users/" + req.user.id + "/pantrys");
  });
  app.delete("/pantrys", isAuthenticated, function(req, res) {
    console.log(req, res);
    res.render("pantrys", {});
  });
  app.get("/search", isAuthenticated, function(req, res) {
    // console.log(res);
    res.render("search", {});
  });
  app.post("/search", isAuthenticated, function(req, res) {
    // console.log(res);
    res.render("search", {});
  });
  app.get("/favorites", isAuthenticated, function(req, res) {
    console.log(req);
    res.render("favorites", {});
  });
  app.get("/results", isAuthenticated, function(req, res) {
    console.log(req);
    res.render("results", {});
  });
  app.get("/profile", isAuthenticated, function(req, res) {
    console.log(req);
    res.render("profile", {});
  });
};
