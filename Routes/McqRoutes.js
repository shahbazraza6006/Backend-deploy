const express = require('express');
const router = express.Router();
const mcqController = require('../Controllers/McqController');

router.get('/mcqs', mcqController.getMCQs);


module.exports = router;
