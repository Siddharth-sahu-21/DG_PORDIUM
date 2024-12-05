const express = require('express');



const app = express();
const port = 5000;

app.get('/',(req, res) => {
    res.send('response form express');
});

app.get('/add', (req, res) => {
    res.send('add response');
});



app.listen(port, () => {
    console.log('server started')});