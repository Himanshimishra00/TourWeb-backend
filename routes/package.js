const express = require('express');
const router = express.Router();
const { getTopSellingPackages } = require('../controllers/Packages');

router.get('/top-selling', getTopSellingPackages);

module.exports = router;
