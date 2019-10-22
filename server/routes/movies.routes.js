const express = require("express");
const router = express.Router();

const moviesController = require('../controllers/movies.controller')
router.post('/recommendMovies', moviesController.getRecommendedMovies);

module.exports = router;
