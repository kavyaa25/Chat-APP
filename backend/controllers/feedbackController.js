const db = require("../data/db");

module.exports = {
  rateMessage(req, res) {
    const { sessionId, index } = req.params;
    const { rating } = req.body; // like / dislike

    if (!db.messages[sessionId]) {
      return res.status(404).json({ error: "Session not found" });
    }

    if (!db.messages[sessionId][index]) {
      return res.status(404).json({ error: "Message not found" });
    }

    db.messages[sessionId][index].rating = rating;

    res.json({ success: true });
  }
};
