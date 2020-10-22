const { Router } = require('express');

const {
  getAllVictims,
  getVictim,
  addVictim,
  updateVictim,
  deleteVictim,
} = require('../controllers/victimsController');

const router = Router();

router.get('/', getAllVictims);

router.get('/:victimId', getVictim);

router.post('/', addVictim);

router.patch('/:victimId', updateVictim);

router.delete('/:victimId', deleteVictim);

module.exports = router;
