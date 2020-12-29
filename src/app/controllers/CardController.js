const CardFacade = require("../Facades/CardFacade");

class CardController {
  async index(req, res) {
    return await CardFacade.index(req, res);
  }

  async store(req, res) {
    return await CardFacade.store(req, res);
  }

  async show(req, res) {
    return await CardFacade.show(req, res);
  }

  async update(req, res) {
    return await CardFacade.update(req, res);
  }

  async destroy(req, res) {
    return await CardFacade.destroy(req, res);
  }
}

module.exports = new CardController();
