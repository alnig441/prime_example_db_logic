var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
    //key : data type
    name : String,
    age: Number,
    sex: String,
    location: String,
    twitter: String
});

module.exports = mongoose.model("people", PeopleSchema);