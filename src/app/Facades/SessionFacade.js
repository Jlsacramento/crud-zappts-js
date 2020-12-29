const { User } = require('../models');

class SessionFacade {
  async store(req, res) {
    const { password } = req.body;

    const user = await this.findOne(req, res);

    if(!user) {
      return res.status(404).json({ message: "Não foi possível encontrar o usuário."});
    }

    if(!await user.checkPassword(password)) {
      return res.status(400).json({ message: "Senha do usuário incorreta."});
    }

    const token = User.generateToken(user);

    return res.status(200).json({ user, token: token });
  }

  async findOne(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });

    return user;
  }
}

module.exports = new SessionFacade();
