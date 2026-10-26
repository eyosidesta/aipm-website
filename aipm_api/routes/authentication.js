const express = require('express');
const router = express.Router();
const isAdminLogged = require("../guard/admin.login.guard");

const AuthController = require("../controllers/authController");

router.post("/login", AuthController.login);
// Only an already-logged-in admin can create another admin account.
// To bootstrap the very first admin, use scripts/seed-admin.js.
router.post("/signup", isAdminLogged, AuthController.sign_up);

module.exports = router;