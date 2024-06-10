const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../Controllers/BeauticianController');

const upload = multer({ dest: 'uploads/' });

router.get('/view', userController.getUser);
router.post('/create', upload.single('courseCertificates'), userController.createUser);
router.get('/view/:id', userController.getUserid);
router.put('/update/:id', userController.updateUserid);
router.delete('/delete/:id', userController.deleteUser);
router.patch('/verified/:id', userController.patchUsers);

module.exports = router;
