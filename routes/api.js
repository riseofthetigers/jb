// API routes.

var Router = require('express').Router;

// Import Controllers.
var businessController = require('../controllers/business_controller')
var candidatesController = require('../controllers/candidates_controller')
var employersController = require('../controllers/employers_controller')
var listingsController = require('../controllers/listings_controller')
var usersController = require('../controllers/users_controller')

// Create API router.
var apiRouter = Router();

// Register business routes.
var businessRouter = Router();
businessRouter.get("/", businessController.get);
businessRouter.post("/", businessController.create);
businessRouter.put("/:id", businessController.update);
businessRouter.delete("/:id", businessController.destroy);

// Register candidates routes.
var candidatesRouter = Router();
candidatesRouter.get("/", candidatesController.get);
candidatesRouter.post("/", candidatesController.create);
candidatesRouter.put("/:id", candidatesController.update);
candidatesRouter.delete("/:id", candidatesController.destroy);

// Register employers routes.
var employersRouter = Router();
employersRouter.get("/", employersController.get);
employersRouter.post("/", employersController.create);
employersRouter.put("/:id", employersController.update);
employersRouter.delete("/:id", employersController.destroy);

// Register listings routes.
var listingsRouter = Router();
listingsRouter.get("/", listingsController.get);
listingsRouter.post("/", listingsController.create);
listingsRouter.put("/:id", listingsController.update);
listingsRouter.delete("/:id", listingsController.destroy);

// Register users routes.
var usersRouter = Router();
usersRouter.get("/", usersController.get);
usersRouter.post("/", usersController.create);
usersRouter.put("/:id", usersController.update);
usersRouter.delete("/:id", usersController.destroy);


apiRouter.use("/users", usersRouter);
apiRouter.use("/employers", employersRouter);
apiRouter.use("/listings", listingsRouter);
apiRouter.use('/candidates', candidatesRouter);
apiRouter.use("/business", businessRouter);

// Expose the API routes.
module.exports = apiRouter;
