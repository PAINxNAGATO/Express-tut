// express yay !!
// to install express 
// npm install express --save
//
const express = require('express');
// using function express() from the express module .
const app = express();
//
// const fs = require('fs');
// const error = fs.readFileSync('./serve/error.html');
//
// function with the methode app.

//app.get
//app.post 
//app.put
//app.delete
//app.all
//app.use
//app.listen
//

//
app.get('/',(req,res) =>{
  console.log(`user hits the callback`);
  res.status(200).send(`HOME PAGE`);
})

//
app.get('/about',(req,res) =>{
  res.status(200).send(`ABOUT PAGE`);
})
//
app.get('/contact',(req,res) =>{
  res.status(200).send('CONTACT PAGE');
})
//
// app.all
// handles all the http module
//
app.all('*',(req,res) =>{
  res.status(404).send(`OOPs wrong choice Reiner BTW annie is hot`);
})

// similar to server.listen(8000)
app.listen(5000,() =>{
  console.log(`server listening on port 5000`);
})

// GET , POST , PUT , DELETE
// these are http verbs .
// GET -- Read Data 
// POST -- insert data.
// PUT -- update data .
// DELETE -- delete data.