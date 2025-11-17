const db = require("../data/db");
const generateId = require("../utils/generateId");

module.exports = {
  createSession() {
    const id = generateId();
    const newSession = {
      id,
      title: "New Chat",
      createdAt: new Date()
    };

    db.sessions.push(newSession);
    db.messages[id] = [];

    return newSession;
  },

  getSessions() {
    return db.sessions;
  },

  deleteSession(id) {
    db.sessions = db.sessions.filter(s => s.id !== id);
    delete db.messages[id];
  },

  renameSession(id, title) {
    const session = db.sessions.find(s => s.id === id);
    if (session) session.title = title;
  },

  getMessages(id) {
    return db.messages[id] || [];
  }
};
