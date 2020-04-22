const router = require("express").Router();
const pantriesController = require("../../controllers/pantriesController");

  // PANTRIES-------------------------------
router.route("/")
.get(pantriesController.findAll)

// Matches with "/api/pantries"
router.route("/")
.post(pantriesController.create)

// Matches with "/api/pantries/:id"
router
.route("/:id")
.get(pantriesController.findById)
.put(pantriesController.update)
.delete(pantriesController.remove);

module.exports = router;