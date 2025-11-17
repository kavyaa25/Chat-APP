const sessionService = require("../services/sessionService");

module.exports = {
  create(req, res) {
    const session = sessionService.createSession();
    res.json(session);
  },

  list(req, res) {
    res.json(sessionService.getSessions());
  },

  delete(req, res) {
    const { id } = req.params;
    sessionService.deleteSession(id);
    res.json({ success: true });
  },

  rename(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    sessionService.renameSession(id, title);
    res.json({ success: true });
  },

  history(req, res) {
    const { id } = req.params;
    res.json(sessionService.getMessages(id));
  }
};
