var randomNumber = require('./random');
var adj = require('../data/twitter_first');
var noun = require('../data/twitter_second');

var generateName = function(){
    var first = adj.adj[randomNumber(0, (adj.adj.length - 1))];
    var second = noun.noun[randomNumber(0, (noun.noun.length - 1))];
    var handle = "@" + first + "_" + second;
    return handle;
};

module.exports = generateName;