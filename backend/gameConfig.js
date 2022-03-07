let fs = require('fs/promises');
let path = require('path');

module.exports = {
    load: async function() {
        try {
            let data = await fs.readFile(path.join(__dirname, 'gameconfig.json'));
            data = data.toString();
            data = JSON.parse(data);
            for(let key in data) {
                this.levelToEquationMap[key] = this.parseEquation(data[key]);
            }
        }
        catch(err) {
            console.log(err);
        }
    },
    /**
     * @param {String} equation 
     */
    parseEquation: function(equation) {
        let equationArray = equation.split('').filter((char) => {
            return char !== ' ';
        });
        let result = {};
        equationArray.forEach((value, index) => {
            result[index + 1] = value;
        })
        return result;
    },
    levelToEquationMap: {},
    getGameConfig: function() {
        return this.levelToEquationMap;
    }
};