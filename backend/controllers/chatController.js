const aiService = require("../services/aiService");
const db = require("../data/db");

module.exports = {
  sendMessage(req, res) {
    const { id } = req.params;
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question required" });
    }

    if (!db.messages[id]) {
      return res.status(404).json({ error: "Session not found" });
    }

    const answer = aiService.generateAnswer(question);

    db.messages[id].push({
      role: "user",
      content: question,
      timestamp: new Date()
    });

    db.messages[id].push({
      role: "assistant",
      content: answer,
      timestamp: new Date()
    });

    res.json(answer);
  }
};
