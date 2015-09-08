var express = require('express');
var router = express.Router();
var people = require('../models/people');

var group = require('../logic/group_generate');


router.get("/generate", function(req, res, next){
    group(20);
    res.send("Yes");
});

router.delete("/:id", function(req, res, next){
    people.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err){
            console.log("Error!!", err)
        }
        res.json(post);
    });
});

router.get("/", function(req, res, next){
    people.find(function(err, people){
        res.json(people);
    });
});

module.exports = router;