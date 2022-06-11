const express = require('express');
app = express();

let {pirate} = require('./data.js')



app.get('/api/people',(req,res)=>{
    res.status(200).json({success : true, data : pirate});
})


// 
app.listen(5000,(req,res)=>{
  console.log(`server running at port 5000`);
})