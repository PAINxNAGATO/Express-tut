// middleWare function 

const authorize = (req,res,next)=>{
   const {user} = req.query;
   if(user === 'Shiki')
   {
     console.log(`testing`);
     console.log(req.user);
     console.log(req.query.user);
     console.log(`Testing`);
     // we can change the parameters from here .
     req.user = {name :'Luffy', id : 'nika nika no mi'};
     next();
   }
   else{
   res.status(401).send(`SIR They have begin to sing `);
  
   }
}

module.exports = authorize;