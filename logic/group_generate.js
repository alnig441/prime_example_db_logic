var people = require('./people_generate');

var generateGroup = function(num){
    for(var i = 0; i < num; i++){
        var person = people();
    }
};

module.exports = generateGroup;