const exp = require('express');
const mong = require('mongoose');
const URI = require('./config/key').URI;
const app = exp();
const cors = require('cors');
const api = require('./routes/api/index');
const PORT = process.env.PORT || 5000;

app.use(api)


app.use(exp.json());

app.get('/', (req, res) =>{
    console.log('request at root');
});



app.listen(PORT, (req, res) => {
    console.log(`Server listening to ${PORT}...`);
})