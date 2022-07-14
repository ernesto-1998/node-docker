const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/singup", authController.singUp);
router.post("/login", authController.login);

module.exports = router;