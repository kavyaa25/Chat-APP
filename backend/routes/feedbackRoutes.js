const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");

router.post("/:sessionId/:index", feedbackController.rateMessage);

module.exports = router;
