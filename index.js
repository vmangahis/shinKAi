const exp = require('express');
const app = exp();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) =>{
    console.log('request at root');
});

app.listen(PORT, (req, res) => {
    console.log(`Server listening to ${PORT}...`);
})