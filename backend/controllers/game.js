let gameConfig = require('../gameConfig');

module.exports = {
    init: function(req, res) {
        try {
            req.session.gameDifficultyLevel = 5;
            req.session.gameWon = false;
            req.session.gameAttempts = 0;
            res.sendStatus(200);
        }
        catch(err) {
            console.log(err);
            res.sendStatus(400);
        }
    },
    updateDifficultyLevel: function(req, res) {
        try {
            req.session.gameDifficultyLevel = req.params.difficultyLevel;
            req.session.gameWon = false;
            req.session.gameAttempts = 0;
            res.sendStatus(200);
        }
        catch(err) {
            console.log(err);
            res.sendStatus(400);
        }
    },
    evaluateSubmission: function(req, res) {
        try {
            let gameInput = req.body;
            let difficultyLevel = req.session.gameDifficultyLevel;
            let trueOutput = gameConfig.getGameConfig()[difficultyLevel];
            let valuesMap = new Set(Object.values(trueOutput));
            let result = {};
            for(let inputPosition in trueOutput) {
                // if some values exists for given character in the row
                if(gameInput.hasOwnProperty(inputPosition)) {
                    // if the value matches exactly
                    if(trueOutput[inputPosition] === gameInput[inputPosition]) {
                        result[inputPosition] = 'Correct';
                    }
                    else if(valuesMap.has(gameInput[inputPosition])) {
                        // if value present but not in correct position
                        result[inputPosition] = 'Present';
                    }
                    else {
                        // if value doesn't match and also not exists in at any other position also
                        result[inputPosition] = 'Wrong';
                    }
                }
                else {
                    // if no values exists for given character in the row
                    result[inputPosition] = 'Wrong';
                }
            }
            res.json(result).status(200);
        }
        catch(err) {
            console.log(err);
            res.sendStatus(400);
        }
    }
};