const express = require('express');
const app = express();
const path = require('path');
//
// setup static and middleware
// app.use(express.static(path));
// static -- the file that server doesn't have to change it .
// example -- sytle.css , logo etc.
// express will take care of all that.
// express takes care of all the static asset

// the only html file in public is index
// hence it will take it as default root directory
// express too op 
// index.html can be treated as static and by default can be served at root '/'
app.use(express.static('./public'));
 
//
// app.get('/' || '/home',(req,res) =>{
// // res.sendFile() module of express uses an absolute path
// // hence we use path module to convert relative path to absolute path. 
// res.status(200).sendFile(path.resolve(__dirname,'./serve/index.html'));
// })
// html file is also static in nature
// can be done with express 
// instead of sendfiles
//
app.get('/about',(req,res) =>{
  // res.sendFile() module of express uses an absolute path
  // hence we use path module to convert relative path to absolute path. 
  res.status(200).sendFile(path.resolve(__dirname,'./serve/about.html'));
  })
//
app.get('/contact',(req,res) =>{
  // res.sendFile() module of express uses an absolute path
  // hence we use path module to convert relative path to absolute path. 
  res.status(200).sendFile(path.resolve(__dirname,'./serve/about.html'));
  })
//
app.get('/services',(req,res) =>{
  // res.sendFile() module of express uses an absolute path
  // hence we use path module to convert relative path to absolute path. 
  res.status(200).sendFile(path.resolve(__dirname,'./serve/about.html'));
  })
//
app.all('*', (req,res)=>{
//  res.status(404).sendFile(__dirname,'./serve/error.html'); not working
// res.status(404).send(`OOPs`); -- working
res.status(404).sendFile(path.resolve(__dirname,'./serve/error.html'));
})
//
app.listen(8000,() =>{
   console.log(`server listening at port 8000`);
});
