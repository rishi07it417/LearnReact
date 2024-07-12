const express = require('express');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv-flow').config();


const User = require('../models/Users');
const fetchUser = require('../middleware/fetchUser');

const router = express.Router();
const {body,validationResult} = require('express-validator');

const JWT_SECERT=process.env.JWT_SECERT;

// ROUTE 1 : Create User
router.post('/createUser',[
    body('name').isLength({min:5}),
    body('email').isEmail(),
    body('password').isLength({min:5})
],async (request,response)=>{

    try {

        const result =  validationResult(request);
        if (result.isEmpty()) {
            const usr =await User.findOne({email:request.body.email});
            console.log(usr);
            if(usr){
              return response.status(400).json({"error":"User Exist"});
            }else{

                const salt = await bcrypt.genSalt(10);
                const secPass = await bcrypt.hash(request.body.password,salt);
                console.log(secPass);
                const user = User({user:request.body.uer,
                    email:request.body.email,
                    password:secPass
                });
                
                User.create(user)
                .then((user)=>{
                    const data = {
                        user : {
                            id:user.id
                        }
                    }
                    console.log(data);

                    const authToken = jwt.sign(data,JWT_SECERT);

                    response.json({authToken});
                })
                .catch((error)=>{
                    console.log(error);
                    return response.status(400).json({"error":"User Exist"});
                });
            }
            
        }else{
            return response.status(400).json({errors:result.errors});
        }
        
    } catch (error) {
        console.log(error);
        return response.status(500).json({"error":"Internal Server Error"});
    }
 
   
});


// ROUTE 2 : Login User
router.post('/loginUser',[
    body('email','Enter a valid Email').isEmail(),
    body('password','Enter a valid Password').isLength({min:3})
],async (request,response)=>{

    try {

        const result =  validationResult(request);
        if (result.isEmpty()) {
         const {email,password} = request.body;
         let user = await User.findOne({email:email});
         if(!user){
            return response.status(400).json({"error":"Try Again"});
         }else{
            const pwdMatch = await bcrypt.compare(password,user.password);
          
            if(!pwdMatch){
                return response.status(400).json({"error":"Try Again"});
            }else{
                const data = {
                    user : {
                        id:user.id
                    }
                }
                console.log(data);

                const authToken = jwt.sign(data,JWT_SECERT);

                response.json({authToken});
            }
         }

        }else{
            console.log(result);
            return response.status(400).json({errors:result.errors});
        }
        
    } catch (error) {
        console.log(error);
        return response.status(500).json({"error":"Internal Server Error"});
    }
 
   
});


// ROUTE 3 : Get User Details : Login Required
router.post('/getUserDetails',fetchUser,async (request,response)=>{

    try {

         const {email,password} = request.body;
         let user = await User.findById(request.user.id).select("-password");
         
        response.json({user});
        
    } catch (error) {
        console.log(error);
        return response.status(500).json({"error":"Internal Server Error"});
    }
 
   
});




module.exports = router;