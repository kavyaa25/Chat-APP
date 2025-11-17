module.exports = function generateId() {
  return "sess_" + Math.random().toString(36).substring(2, 10);
};
