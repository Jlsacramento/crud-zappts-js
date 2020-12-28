const { Card } = require("../models");

class CardController {
  async index(req, res) {
    const cards = await Card.findAll();

    return res.json(cards);
  }

  async store(req, res) {
    const card = await Card.create(req.body);

    return res.status(201).json(card);
  }

  async show(req, res) {
    const {id} = req.params;

    const card = await Card.findByPk(id);

    if(!card) {
      return res.status(404).json({ message: "A cartinha não foi encontrada."});
    }

    return res.json(card);

  }

  async update(req, res) {
    const {id} = req.params;

    const card = await Card.findByPk(id);

    if(!card) {
      return res.status(404).json({ message: "A cartinha não foi encontrada."});
    }

    const newCard = await card.update(req.body);

    return res.json(newCard);
  }

  async destroy(req, res) {
    const card = await Card.destroy({
      where:{
        id: req.params.id
      }
    })

    if(card) {
      return res.json({ message: "Cartinha excluída com sucesso." })
    }
    return res.status(400).json({ message: "Não foi possível excluir a cartinha." });
  }
}

module.exports = new CardController();
