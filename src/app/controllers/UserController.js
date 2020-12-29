const UserFacade = require('../Facades/UserFacade')

class UserController {
  async store(req, res) {
    return await UserFacade.store(req, res);
  }
}

module.exports = new UserController();
