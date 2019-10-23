const express = require("express");
const router = express.Router();

const moviesController = require('../controllers/books.controller')
router.post('/recommendBooks', moviesController.getRecommendedBooks);

module.exports = router;
