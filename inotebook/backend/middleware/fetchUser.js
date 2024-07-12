require('dotenv-flow').config();

var jwt = require('jsonwebtoken');
const JWT_SECERT=process.env.JWT_SECERT;

const fetchUser = (request,response,next)=>{

    try {
        const token = request.header('authToken');
        if(!token){
            return response.status(401).json({error:"Please Authrenticate with valid token"});
        }else{
            const data = jwt.verify(token,JWT_SECERT);
            request.user = data.user;
            next();
        }
        
    } catch (error) {
        console.log(error);
        return response.status(401).json({error:"Please Authrenticate with valid token"});

    }

    
}

module.exports = fetchUser;