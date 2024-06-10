const express = require('express');
const router = express.Router();
const userController = require('../Controllers/RatingController');
router.get('/view', userController.getUser);
router.post('/create', userController.createUser);
router.get('/view/:id', userController.getUserid);
router.put('/update/:id', userController.updateUserid);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;

