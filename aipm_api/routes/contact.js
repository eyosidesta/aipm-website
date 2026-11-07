const express = require("express");
const router = express.Router();
const isAdminLogged = require("../guard/admin.login.guard");

const contactController = require("../controllers/contactController");

router.get("/", isAdminLogged, contactController.get_all_contacts);

router.post("/", contactController.add_contact);

router.delete("/:id", isAdminLogged, contactController.delete_contact);

module.exports = router;
