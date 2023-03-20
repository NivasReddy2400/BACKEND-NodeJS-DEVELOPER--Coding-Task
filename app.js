const express = require('express');

const routerroutes = require('./routes/contactsroute.js');

const app = express();

app.use(express.json());

app.use('/createContact',routerroutes)
app.use('/getContact',routerroutes)
app.use('/updateContact',routerroutes)
app.use('/deleteContact',routerroutes)
app.use('*',(req,res)=>{
    res.status(404).send('NOT A VALID URL')
})


app.listen(5000,()=>{
    console.log('Server started on 5000');
})
