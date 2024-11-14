// importing express
const express = require('express');
const UserRouter =require('./routers/userRouter');

// create an express app
const app = express();
const port = 5000;

//middleware
app.use('/user', UserRouter);

app.get('/',(req,res) => {
    res.send('response from express');

})
app.get('/add',(req,res) => {
    res.send('add response');
})
app.get('/all',(req,res) => {
    res.send('send all responses');
})
app.get('/delete',(req,res) => {
    res.send('delete all responses');
})


//starting the server 
app.listen(port, () => { console.log('server started') });

