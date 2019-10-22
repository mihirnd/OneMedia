const express = require("express");
const router = express.Router();

const songsController = require("../controllers/songs.controller")

router.post('/recommendArtists', songsController.getRecommendedArtists);
router.get('/artists', songsController.getArtists);
router.post('/recommendSongs', songsController.getRecommendedSongs);

module.exports = router;
