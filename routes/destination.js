const express = require('express');
const router = express.Router();
const { getDestinations } = require('../controllers/Destination');

router.get('/', getDestinations);

module.exports = router;
