var randomNumber = require('./random');

var generateAge = function(){
    return randomNumber(10, 65);
};

module.exports = generateAge;