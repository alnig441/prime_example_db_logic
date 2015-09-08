var names = require("../data/names");
var femaleNames = require("../data/female_names");
var maleNames = require("../data/male_names");
var random = require("./random");

var giveName = function(sex){
    var randomNumber;
    if(sex == "Female"){
        randomNumber = random(0,(femaleNames.names.length-1));
        return femaleNames.names[randomNumber]
    } else {
        randomNumber = random(0,(maleNames.names.length-1));
        return maleNames.names[randomNumber];
    }
};

module.exports = giveName;