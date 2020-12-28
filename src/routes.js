const express = require("express");

const routes = express.Router();

const CardController = require("./app/controllers/CardController");

routes.get("/", (req, res) => {
  res.status(200).send({
    message: "API is Only!",
  });
});

routes.get("/cards", CardController.index);
routes.post("/cards", CardController.store);
routes.get("/cards/:id", CardController.show);
routes.put("/cards/:id", CardController.update);
routes.delete("/cards/:id", CardController.destroy);

module.exports = routes;
