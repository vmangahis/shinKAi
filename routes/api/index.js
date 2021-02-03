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
    console.log('Api route connected to db');
})
.catch((err) => {
    console.log(err);
});

const que = req.params.title;
    
        ItemModel.find({anime_title: new RegExp(que,'i')},{_id: 0}, (err, results) => {
      console.log(results);
          res.send(results);
        })
})


module.exports = router;