const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const uri = require('../../config/key').URI;
const db = mongoose.connection;
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
    console.log('Api route connected to db');
})
.catch((err) => {
    console.log('error');
});

router.get("/api/anime", (req, res) => {
    console.log('api route GET REQUEST');
    
    res.send('hello');
})


module.exports = router;