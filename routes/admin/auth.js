const express = require('express');
const router = express.Router();
const authController = require('../../controllers/admin/authController');

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', authController.logout);

module.exports = router;
