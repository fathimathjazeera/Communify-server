const jwt=require('jsonwebtoken')
require('dotenv').config();

function auth(req,res,next){
    try{
    let authHeader=req.headers.authorization
    if(authHeader==undefined){
        res.status(401).send({error:"no token provided"})
    }
    let token=authHeader.split(" ")[1]
    console.log(token,"token from middleware");
   const verified= jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,function(err,decoded){
if(err){
    console.log("JWT Verification Error:", err.message);
    res.send({error:"Autentication failed"})
}else{
    const userId = decoded.id;
    const username = decoded.username;
    req.userId = userId;
    req.username = username;
    next()
}
    })
}catch(err){
    res.status(400).send("invalid token")
}
}

let refreshTokens = [];



app.post('/refresh-token', (req, res) => {
    const { refresh_token } = req.body;
    if (!refresh_token) {
      return res.status(400).json({ message: 'Refresh token is required' });
    }
    // Check if the refresh token is valid
    if (!refreshTokens.includes(refresh_token)) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    // In a real-world scenario, you would validate the refresh token against a database
    // and ensure it hasn't been revoked or expired prematurely.
  
    // Generate a new access token
    const newAccessToken = jwt.sign({ userId: 'exampleUserId' }, SECRET_KEY, {
      expiresIn: '15m', // Set your desired expiration time
    });
  
    res.json({ access_token: newAccessToken });
  });



function verifyRefresh(email, token) {
    try {
     const decoded = jwt.verify(token,process.env.REFRESH_TOKEN_SECRET);
     return decoded.email === email;
    } catch (error) {
     // console.error(error);
     return false;
    }
   }




   module.exports={auth,verifyRefresh}

   