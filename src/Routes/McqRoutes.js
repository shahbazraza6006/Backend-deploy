const express = require('express');
const router = express.Router();
const mcqController = require('../Controllers/McqController');

router.get('/mcqs', mcqController.getMCQs);
router.get('/hello', mcqController.sayHello);

module.exports = router;
