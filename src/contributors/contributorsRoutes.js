const express = require('express');
const {
  getAllContributors,
  getContributor,
  addContributor,
  updateContributor,
  deleteContributor,
} = require('./contributorsController');

const router = express.Router();

router.get('/', getAllContributors);

router.get('/:contributorId', getContributor);

router.post('/', addContributor);

router.patch('/:contributorId', updateContributor);

router.delete('/:contributorId', deleteContributor);

module.exports = router;
