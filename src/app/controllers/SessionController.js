const SessionFacade = require('../Facades/SessionFacade');

class SessionController {
  async store(req, res) {
    return SessionFacade.store(req, res);
  }
}

module.exports = new SessionController();
