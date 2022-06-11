const logger = (req,res,next) => {
  const methode = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(methode, url, time);
  // Ending the cycle.
  // res.send(`Testing`)
  //
  // sending it to the next middleWare.
  next();
};

// export 

module.exports = logger;