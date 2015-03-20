// Import Users Controller.
var usersController = require('../controllers/users_controller')
  // Create a router for users.
var router = require('express').Router();

// Register user routes.
router.get("/", usersController.get);
router.post("/", usersController.create);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.destroy);

// Expose the user routes.
module.exports = router;
