const express = require('express');
const router = express.Router();
const mcqController = require('../Controllers/McqController');

router.get('/mcqs', mcqController.getMCQs);
router.post('/submit', mcqController.submitAnswers);

module.exports = router;
