const express = require('express');
const router = express.Router();
const {
  getCandidates,
  addCandidate,
  getCandidateById,
  updateCandidate,
  deleteCandidate,
} = require('../controllers/candidateController');

router.get('/', getCandidates);
router.post('/', addCandidate);
router.get('/:id', getCandidateById);
router.put('/:id', updateCandidate);
router.delete('/:id', deleteCandidate);

module.exports = router;
