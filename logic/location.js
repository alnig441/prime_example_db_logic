var location = require("../data/location");
var random = require("./random");

var getLocation = function(){
    var randomNumber = random(0, (location.locations.length - 1));
    return location.locations[randomNumber];
};

module.exports = getLocation;