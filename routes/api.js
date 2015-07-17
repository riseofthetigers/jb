// API routes.

var Router = require('express').Router;

// Import Controllers.
var businessController = require('../controllers/business')
var candidatesController = require('../controllers/candidates')
var employersController = require('../controllers/employers')
var listingsController = require('../controllers/listings')
var usersController = require('../controllers/users')
var repliesController = require('../controllers/replies')
var topicsController = require('../controllers/topics')

// Register business routes.
var businessRouter = Router();
businessRouter.get("/", businessController.getAll);
businessRouter.get("/:id", businessController.getById);
businessRouter.post("/", businessController.create);
businessRouter.put("/:id", businessController.update);
businessRouter.delete("/:id", businessController.destroy);

// Register candidates routes.
var candidatesRouter = Router();
candidatesRouter.get("/", candidatesController.get);
candidatesRouter.get("/current", candidatesController.getCurrent);
candidatesRouter.get("/:id", candidatesController.getById);
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
listingsRouter.get("/", listingsController.getAll);
listingsRouter.get("/:id", listingsController.getById);
listingsRouter.post("/", listingsController.create);
listingsRouter.put("/:id", listingsController.update);
listingsRouter.delete("/:id", listingsController.destroy);

// Register users routes.
var usersRouter = Router();
usersRouter.get("/", usersController.get);
usersRouter.get("/:id", usersController.getUser);
usersRouter.post("/", usersController.create);
usersRouter.put("/:id", usersController.update);
usersRouter.delete("/:id", usersController.destroy);

// Register replies routes.
var repliesRouter = Router();
repliesRouter.get("/", repliesController.get);
repliesRouter.post("/", repliesController.create);
repliesRouter.put("/:id", repliesController.update);
repliesRouter.delete("/:id", repliesController.destroy);

// Register topics routes.
var topicsRouter = Router();
topicsRouter.get("/:id", topicsController.get);
topicsRouter.post("/", topicsController.create);
topicsRouter.put("/:id", topicsController.update);
topicsRouter.delete("/:id", topicsController.destroy);

// Create API router.
var apiRouter = Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/employers", employersRouter);
apiRouter.use("/listings", listingsRouter);
apiRouter.use('/candidates', candidatesRouter);
apiRouter.use("/business", businessRouter);
apiRouter.use("/replies", repliesRouter);
apiRouter.use("/topics", topicsRouter);

// Expose the API routes.
module.exports = apiRouter;
