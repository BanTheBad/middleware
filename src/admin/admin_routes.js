const express = require('express');
const { doAdminStuff } = require('./admin_controllers');

const router = express.Router();

router.get('/', doAdminStuff);

module.exports = router;
