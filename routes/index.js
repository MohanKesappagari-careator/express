const express = require("express");
const user_controller = require("../controllers/index");
const router = express.Router();

router.post("/create", user_controller.POST);

module.exports = router;
