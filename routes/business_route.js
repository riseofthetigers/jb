// Import Candidates Controller.
var businessController = require('../controllers/business_controller')
  // Create a router for candidates.
var router = require('express').Router();

// Register candidates routes.
router.get("/", businessController.get);
router.post("/", businessController.create);
router.put("/:id", businessController.update);
router.delete("/:id", businessController.destroy);

// Expose the candidates routes.
module.exports = router;