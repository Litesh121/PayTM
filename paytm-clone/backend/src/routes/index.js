const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const bankAccountController = require('../controllers/bankAccountController');

router.post('/api/login', userController.login);
router.post('/api/bank-account', bankAccountController.addBankAccount);

module.exports = router;