const exp = require('express');
const mong = require('mongoose');
const URI = require('./config/key').URI;
const app = exp();

const PORT = process.env.PORT || 5000;


//connect to db


mong.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connected to Anime Database!');
})
.catch(error =>{console.log(error)});
;

app.use(exp.json());

app.get('/', (req, res) =>{
    console.log('request at root');
});



app.listen(PORT, (req, res) => {
    console.log(`Server listening to ${PORT}...`);
})