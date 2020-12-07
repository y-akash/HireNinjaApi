const express = require('express');
const apiRoutes = require('./routes/api');
const mongoose = require('mongoose');

// Creating an Express app
const app = express();

// Middelware
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: false })); // to support URL-encoded bodies

// Connecting to database
mongoose.connect('mongodb://localhost:27017/ninjago', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Successfully connected to database');
})
.catch(()=>{
    console.log('Successfully connected to database');
});

// Routes
app.use('/api', apiRoutes);


// Listening to port
app.listen(3000,(err)=>{
    if (!err){
        console.log('Listening to port 3000');
    }
});