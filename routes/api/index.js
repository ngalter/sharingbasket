const router = require("express").Router();
const userRoutes = require("./users");

// Book routes
router.use("/users", userRoutes);

// Auth
router.get('/api/home', function(req, res) {
    res.send('Welcome!');
  });
router.get('/api/secret', function(req, res) {
    res.send('The password is potato');
  });

module.exports = router;