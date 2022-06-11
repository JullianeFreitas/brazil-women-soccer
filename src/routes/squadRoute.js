const express = require("express");
const router = express.Router();
const controller = require("../controllers/squadController");
const {body} = require("express-validator");

router.get("/:teamName", controller.getPlayersByTeam);
router.get("/:teamName/:position", controller.getPlayersByPosition);


module.exports = router;
