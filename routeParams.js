// the data of the APIs are setted up in the server(backend)
// and whenever frontend is triggered with the use of the api 
// the backend (server) sends an appilication json file with the data of the api 
// and with the help of the json file front end dynamically produce the api with 
// static json file 
// and serve the user 
// 
// for the transfer of this json an http interface is setted up 
// between frontend and backend 
// frontend handles the user interface 
// backend handles the responses
//
// 


const express = require('express');
app = express();
const {pirate} = require('./data');
// const {pirate,testObj} = require('./data');

// res.json() converts the json object to a json string using json stringyfy.
// responds the json string to the front-end.
// and res.json() -- returns the json string with input of json objects 
// objects like -- array , object , boolean , number , null.

app.get('/',(req,res)=>{
  res.send(`<h1>Home Page</h1><a href = '/api/product'>products</a>`);
})
// xId is the route parameter 
// xId : 'the value entered in the browser in string'
// route parameters acts as an place holder for the route, which saves us a lot of if else statements 
app.get('/api/products/:xId', (req,res)=>{
//  console.log(req);
//  console.log(req.params);
//  req.params contains the route parameter.
// we can access and use it 
 const {xId} = req.params;
 const singleProduct = pirate.find((x) => x.id === xId);
 if(!singleProduct){
   return res.status(404).send('pirate doesnt exists');
 }
 else{
 res.json(singleProduct);
 }
})

// complex route parameters
//  nested route parameters
app.get('/api/products/:xId/devilFruit/:fruit',(req,res) =>{
  console.log(req.params);
  res.send('Hello World');
  // here using nested routes two get two values from the req.
})
// query keyword helps us to create the key value pairs
// by typing query?{key}={value}
//
// const arr11=[1,2];
// const arr12=[3,4];
// console.log(...arr11);
// const arr13=[...arr11,...arr12];
// console.log(arr13);

app.get('/api/v1/query',(req,res) =>{
   console.log(req.query);
   const {search , limit} = req.query;
   // spread operator 
   let sortedPirate = [...pirate];
  //  console.log('Testing');
  //  const a={...testObj};
  //  console.log(a);
  //  console.log('Testing');
  //  console.log(sortedPirate);
  //  res.send('Dark King');
   if(search){
     sortedPirate = sortedPirate.filter((x)=>{
       // startsWith is a methode used 
       return x.name.startsWith(search);
     })
   }
  //  console.log(sortedPirate);
  if(limit){
    sortedPirate = sortedPirate.slice(0,Number(limit));
  }
  if(sortedPirate.length < 1){
    // if we don't use return ,javascript still reads the code even after responding once . 
    // hence it tends to responds for two times.
    // hence the error without return.
  return res.status(200).json({success : true , Data : []});
  }
  //
  res.status(200).json(sortedPirate);
})


// /: params acts as an place holder to get data .
// from the request to make it own .
app.listen(5000,()=>{
  console.log(`server running at port 5000`);
})
