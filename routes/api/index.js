const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const uri = require('../../config/key').URI;
const db = mongoose.connection;
const ItemModel = require('../../models/ItemModel');
const cors = require('cors');

router.use(cors());

router.get("/api/anime/:title", (req, res) => {

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
    
    console.log(`Searched for: ${req.params.title}`)
})
.catch((err) => {
    console.log(err);
});

const que = req.params.title;
    
        ItemModel.find({anime_title: new RegExp(que,'i')}, (err, results) => {
    
          res.send(results);
        })
})

router.get("/api/anime/", (req, res) => {

    mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
        console.log('Blank search.');
    })
    .catch((err) => {
        console.log(err);
    });
    
    
        
            ItemModel.find({}, (err, results) => {
              res.send(results);
            })
    })


module.exports = router;