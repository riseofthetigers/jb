// Import Listings Controller.
var listingsController = require('../controllers/listings_controller')
  // Create a router for listings.
var router = require('express').Router();

// Register listings routes.
router.get("/", listingsController.get);
router.post("/", listingsController.create);
router.put("/:id", listingsController.update);
router.delete("/:id", listingsController.destroy);

// Expose the user routes.
module.exports = router;
