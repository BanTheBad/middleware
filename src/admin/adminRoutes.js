const express = require('express');
const { doAdminStuff } = require('./adminController');

const router = express.Router();

router.get('/', doAdminStuff);

module.exports = router;
