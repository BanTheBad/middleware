const { Router } = require('express');

const { doAdminStuff } = require('../controllers/adminController');

const router = Router();

router.get('/', doAdminStuff);

module.exports = router;
