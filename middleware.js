// MiddleWare functions -> 
// 1. we can built our own middleWare
// 2. Express provides us with some useful buit-in middleWare
// 3. third Party MiddleWare.
// using morgan can be used for third party middleware.

const express = require("express");
app = express();
const logger = require("./logger.js");
const authorize = require("./authorise");
const morgan = require('morgan');


//

// Express takes care of all the referencing done behind the scenes
// as we can use req,res,next in logger.
// Express takes care of all the refercing done.
// const logger = (req,res,next) => {
//   const methode = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(methode, url, time);
//   // Ending the cycle.
//   // res.send(`Testing`)
//   //
//   // sending it to the next middleWare.
//   next();
// };
// catch while using middleWare that is we must must must pass it to
// the next middleWare unless we are terminating the whole cycle.

//
 

// req =====> middleware ====> res.


//

// app.use --> adds logger middleWare to all the routes. 
// instead of doing it the manuel Way.
// app.use Imp Points ->
// 1. order matters here app.use can be used to include the middleWare in the routes below it 
// 2. routes can be specified in the app.use('route',middleWare)



// user-made MiddleWare 
// app.use([authorize,logger]);
//

//built-in Middleware.
// app.use(express.static())
// Using multiple middleWares.
//
// third party middleWare using morgan.
app.use(morgan('tiny'));
//

// app.use('/api',logger);
// here route used is api 
// hence both routes api/products and api/items are included with middleWare.
// and middleWare is included only in parents and child routes of specified route.
//

//
app.get("/", /*middleWare*/  (req, res) => {
  console.log(req.user);
  res.send(`Home Page`);
});

app.get("/about", [authorize,logger], (req, res) => {
  res.send(`About Page`);
});

app.get("/api/products",  (req, res) => {
  res.send(`Products`);
});

app.get("/api/items",  (req, res) => {
  res.send(`Items`);
});

// server listening at port 5000.
app.listen(5000, () => {
  console.log(`server running at port 5000`);
});
