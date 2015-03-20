// Import Candidates Controller.
var candidatesController = require('../controllers/candidates_controller')
  // Create a router for candidates.
var router = require('express').Router();

// Register candidates routes.
router.get("/", candidatesController.get);
router.post("/", candidatesController.create);
router.put("/:id", candidatesController.update);
router.delete("/:id", candidatesController.destroy);

// Expose the candidates routes.
module.exports = router;
