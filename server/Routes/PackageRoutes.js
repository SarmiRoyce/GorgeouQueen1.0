const express = require('express');
const router = express.Router();
const packageController = require('../controllers/packageController');


router.get('/packages', packageController.getAllPackages);


router.get('/packages/:packageName', packageController.getPackageByName);

module.exports = router;
