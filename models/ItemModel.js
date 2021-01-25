const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ItemSchema = new schema({

    title:{
        type:String,
        required: true
    },

    airstart:{
        type:Date,
        required:true
    },


    airend:{
        type:Date,
        required:true
    },

    
    status:{
        type:String,
        required:true
    },

    episode:{
        type:String,
        required:true
    }

})

