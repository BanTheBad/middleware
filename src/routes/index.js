const { Router } = require('express');

const adminRoutes = require('./adminRoutes');
const authRoutes = require('./authRoutes');
const caseRoutes = require('./casesRoutes');
const contributorRoutes = require('./contributorsRoutes');
const victimRoutes = require('./victimsRoutes');

const router = Router();

router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/cases', caseRoutes);
router.use('/contributors', contributorRoutes);
router.use('/victims', victimRoutes);

module.exports = router;
