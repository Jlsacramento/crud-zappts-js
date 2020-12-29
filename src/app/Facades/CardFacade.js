const { Card } = require("../models");

class CardFacade {
  async index(req, res) {
    const response = await this.findAll();

    return res.json(response);
  }

  async findAll() {
    const cards = await Card.findAll();

    return cards;
  }

  async store(req, res) {
    const response = await this.create(req, res);

    if(response) {
      return res.status(201).json(response);
    }
    return res.status(400).json({ message: "Não foi possível enviar a cartinha."});
  }

  async create(req, res) {
    const card = await Card.create(req.body);

    return card;
  }

  async show(req, res) {
    const response = await this.findByPk(req, res);

    return res.json(response);
  }

  async findByPk(req, res){
    const {id} = req.params;

    const card = await Card.findByPk(id);

    return card;
  }

  async update(req, res) {
    const response = await this.findByPk(req);

    if(!response) {
      return res.status(404).json({ message: "A cartinha não foi encontrada."});
    }

    await response.update(req.body);

    return res.json(response);
  }

  async destroy(req, res) {
    const response = this.delete(req, res);

    if(response) {
      return res.json({ message: "Cartinha excluída com sucesso." })
    }
    return res.status(400).json({ message: "Não foi possível excluir a cartinha." });
  }

  async delete(req, res) {
    const card = await Card.destroy({
      where:{
        id: req.params.id
      }
    })

    return card;
  }
}

module.exports = new CardFacade();
