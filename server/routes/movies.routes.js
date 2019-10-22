const express = require("express");
const router = express.Router();

router.post('/recommendMovies', requestController.makeRequest);

module.exports = router;
