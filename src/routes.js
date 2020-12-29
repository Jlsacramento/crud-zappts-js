const express = require("express");

const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth")

const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");
const CardController = require("./app/controllers/CardController");

routes.get("/", (req, res) => {
  res.status(200).send({
    message: "API is Only!",
  });
});

routes.post("/users", UserController.store);

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

/**
 * Cards
 */
routes.get("/cards", CardController.index);
routes.post("/cards", CardController.store);
routes.get("/cards/:id", CardController.show);
routes.put("/cards/:id", CardController.update);
routes.delete("/cards/:id", CardController.destroy);

module.exports = routes;
