const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/my-account', userController.getUserBuId);

module.exports = router;
