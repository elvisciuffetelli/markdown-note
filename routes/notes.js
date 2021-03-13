var VerifyToken = require("../auth/VerifyToken");

// Bring in the express server
const express = require("express");

// Bring in the Express Router
const router = express.Router();

// Import the Controller
const controller = require("../controllers/notes");

// Create a new Note
router.post("/", VerifyToken, controller.create);

// Get all Notes
router.get("/", VerifyToken, controller.findAll);

// Get Note by Id
router.get("/:id", controller.findOne);

// Modify existing Note
router.put("/:id", controller.update);

// Delete Note by Id
router.delete("/:id", VerifyToken, controller.delete);

module.exports = router;
