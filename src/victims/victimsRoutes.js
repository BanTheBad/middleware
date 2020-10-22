const express = require('express');
const {
  getAllVictims,
  getVictim,
  addVictim,
  updateVictim,
  deleteVictim,
} = require('./victimsController');

const router = express.Router();

router.get('/', getAllVictims);

router.get('/:victimId', getVictim);

router.post('/', addVictim);

router.patch('/:victimId', updateVictim);

router.delete('/:victimId', deleteVictim);

module.exports = router;
