var randomNumber = require('./random');

var assignSex = function(){
    var random = randomNumber(0,1);
    if(random == 1){
        return "Female";
    } else {
        return "Male";
    }
};

module.exports = assignSex;