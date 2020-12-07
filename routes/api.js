const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the db
router.get('/ninjas',(req,res)=>{
    // res.send('Hello Ninjas Get');
    Ninja.find({}, (err, ninjas)=>{
        res.send(JSON.stringify(ninjas));
    });
});

// add a new ninja to the db
router.post('/ninjas',(req,res)=>{
    console.log(req.body);
    const ninja = new Ninja({
        name : req.body.name,
        rank : req.body.rank
    });
    
    ninja.save((err)=>{
        if (!err){
            res.send('Successfully Added.')
        }else{
            res.send('Error while saving ninja');
        }
    })
});

// update a ninja in the db
router.put('/ninjas/:id',(req,res)=>{
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body, (err) =>{
        if (err){
            res.send('Error while Updating ninja.')
        }else{
            res.send('Successfully Updated.');
        }
    });
});

// delete a ninja form the db
router.delete('/ninjas/:id',(req,res)=>{
    Ninja.findByIdAndRemove({_id: req.params.id}, (err, ninja) =>{
        if (err){
            res.send('Error while Deleting ninja.')
        }else{
            console.log(ninja);
            res.send(ninja);
        }
    });
});

module.exports = router;