const { Router } = require('express');

const { doAdminStuff } = require('./adminController');

const router = Router();

router.get('/', doAdminStuff);

module.exports = router;
