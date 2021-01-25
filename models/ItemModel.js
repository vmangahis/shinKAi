const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ItemSchema = new schema({

    anime_title:{
        type:String,
        required: true
    },

    episodes:{
        type:Number
    },

    airstart:{
        type:Date
    },

    airend:{
        type:Date
    },

    status:{
        type:String
    },


    img_url:{
        type:String
    }

}, {collection : 'animedata'})

module.exports = ItemModel = mongoose.model('animedata',ItemSchema);

