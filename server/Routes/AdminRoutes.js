const express = require('express');
const router = express.Router();
const AdminController = require('../Controllers/AdminController');


router.post('/createadmin', AdminController.admincreate);

module.exports = router;


