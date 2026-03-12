const express = require("express");
const router = express.Router();

const auth = require("../controllers/authController");

router.post("/register", auth.register);
router.get("/users", auth.getUsers);

module.exports = router;

router.post("/login",auth.login);