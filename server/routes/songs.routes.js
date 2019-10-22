const express = require("express");
const router = express.Router();

const songsController = require("../controllers/songs.controller")

router.post('/recommendArtists', songsController.getRec);

module.exports = router;
