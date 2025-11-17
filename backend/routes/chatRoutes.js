const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");

router.post("/:id", chatController.sendMessage);

module.exports = router;
