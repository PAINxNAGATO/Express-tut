console.log('express-tut');
const http = require('http');
const fs = require('fs');

const home     =  fs.readFileSync('./index.html');
const about    =  fs.readFileSync('./about.html');
const contact  =  fs.readFileSync('./contact.html');
const services =  fs.readFileSync('./services.html');
const error    =  fs.readFileSync('./error.html')
const server = http.createServer((req,res) => {
  // console.log('user hit the server :');
  // HOME page 
  if(req.url === '/' || req.url === '/home'){
  res.writeHead(200,{'content-type':'text/html'});
  res.write(home);
  res.end();
  }
  // contact page. 
  else if(req.url === '/contact'){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(contact);
    res.end();
  }
  // about page.
  else if(req.url === '/about'){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(about);
    res.end();
  }
  else if(req.url === '/services'){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(services);
    res.end();
  }
  // ERROR page.
  else{
    res.writeHead(404,{'content-type':'text/html'});
    res.write(error);
    res.end();
  }
})

server.listen(5000);