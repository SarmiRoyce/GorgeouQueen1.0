const express = require('express');
const router = express.Router();
const userController = require('../Controllers/BookingController');
router.post('/create', userController.createBooking);
router.get('/view', userController.getBooking);
router.patch('/update/:id', userController.updateBookingStatus); // New route for updating status

module.exports = router;

