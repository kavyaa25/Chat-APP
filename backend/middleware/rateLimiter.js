const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 80,
  message: "Too many requests. Try again later."
});

module.exports = limiter;
