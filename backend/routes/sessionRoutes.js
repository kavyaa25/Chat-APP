const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionController");

router.get("/", sessionController.list);
router.post("/", sessionController.create);
router.get("/:id", sessionController.history);
router.put("/:id", sessionController.rename);
router.delete("/:id", sessionController.delete);

module.exports = router;
