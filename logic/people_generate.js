var name = require('./name');
var age = require('./age');
var sex = require('./sex');
var location = require('./location');
var twitter = require('./twitter');
var people = require('../models/people');

var generatePerson = function(){
    var pAge = age();
    var pSex = sex();
    var pName = name(pSex);
    var pLocation = location();
    var pTwitter = twitter();

    var newPerson = new people();
    newPerson.name = pName;
    newPerson.age = pAge;
    newPerson.sex = pSex;
    newPerson.location = pLocation;
    newPerson.twitter = pTwitter;

    people.create(newPerson, function(err, post){
    });

    return newPerson;
};

module.exports = generatePerson;