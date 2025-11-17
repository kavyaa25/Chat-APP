const express = require("express");
const cors = require("cors");

const logger = require("./config/logger");
const limiter = require("./middleware/rateLimiter");
const requestLogger = require("./middleware/requestLogger");

const sessionRoutes = require("./routes/sessionRoutes");
const chatRoutes = require("./routes/chatRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(logger);
app.use(requestLogger);
app.use(limiter);

// ROUTES
app.use("/api/sessions", sessionRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/feedback", feedbackRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
