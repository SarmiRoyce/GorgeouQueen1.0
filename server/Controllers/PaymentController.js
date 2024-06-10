const express = require('express');
const router = express.Router();

// Middleware to check if the user is an admin
function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).send('Forbidden');
    }
}

router.get('/api/payments', isAdmin, async (req, res) => {
    try {
        const payments = await Payment.find(); // Assuming you're using a model like Mongoose for MongoDB
        res.json(payments);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
