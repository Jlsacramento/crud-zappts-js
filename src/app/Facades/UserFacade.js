const { User } = require('../models');

class UserFacade {
  async store(req, res) {
    const response = await this.create(req, res);

    if(response) {
      return res.status(201).json(response);
    }
    return res.status(400).json({ message: "Não foi possível criar o usuário."});
  }

  async create(req, res) {
    const user = await User.create(req.body);

    return user;
  }
}

module.exports = new UserFacade();
