// Import Employers Controller.
var employersController = require('../controllers/employers_controller')
  // Create a router for employers.
var router = require('express').Router();

// Register employers routes.
router.get("/", employersController.get);
router.post("/", employersController.create);
router.put("/:id", employersController.update);
router.delete("/:id", employersController.destroy);

// Expose the employers routes.
module.exports = router;
