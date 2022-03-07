let express = require('express');
let router = express.Router();
let gameController = require('../controllers/game');

router.post('/init', gameController.init);

router.post('/', gameController.evaluateSubmission);

router.put('/difficultyLevel/:difficultyLevel', gameController.updateDifficultyLevel);

module.exports = router;