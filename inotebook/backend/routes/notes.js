const express = require('express');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv-flow').config();


const User = require('../models/Notes');
const fetchUser = require('../middleware/fetchUser');

const router = express.Router();
const {body,validationResult} = require('express-validator');
const Notes = require('../models/Notes');

const JWT_SECERT=process.env.JWT_SECERT;


// ROUTE 1 : Fetch all User Notes
router.post('/fetchAllNotes',fetchUser,async (request,response)=>{
    try {
        console.log(request.user.id);
        const notes = await Notes.find({user:request.user.id});
        console.log(notes);
        return response.json(notes);
        
    } catch (error) {
        console.log(error);
        return response.status(500).json({"error":"Internal Server Error"});
    }
    
});

// ROUTE 2 : Add User Notes
router.post('/addNotes',fetchUser,[
    body('title','Enter a valid title').isLength({min:3}),
    body('description','Enter a valid description').isLength({min:3})
],async (request,response)=>{

    try {

            const result =  validationResult(request);
            if (result.isEmpty()) {
            const {title,description,tag} = request.body;
            let note = await Notes.create({
                user:request.user.id,
                title:title,
                description:description,
                tag:tag
            })
            return response.json(note);
        }else{
            console.log(result);
            return response.status(400).json({errors:result.errors});
        }
        
    } catch (error) {
        console.log(error);
        return response.status(500).json({"error":"Internal Server Error"});
    }
   
});






// ROUTE 3 : Update User Notes
router.put('/updateNote/:id',fetchUser,async (request,response)=>{

    try {

            const {title,description,tag} = request.body;
            const newNote = {};

            if(title){
                newNote.title = title;
            }
            if(description){
                newNote.description = description;
            }
            if(tag){
                newNote.tag = tag;
            }


            let note = await Notes.findById(request.params.id);
            if(!note){
                return response.status(404).json({result:"notes does not exist"});
            }else{

                if(note.user.toString() !== request.user.id){
                    return response.status(401).json({result:"Unauthorized access"});
                }else{
                   result = await Notes.findByIdAndUpdate(request.params.id,newNote);
                   return response.json({result:"note updated successfully"});

                }
            }
            
        
    } catch (error) {
        console.log(error);
        return response.status(500).json({"error":"Internal Server Error"});
    }
    
});


// ROUTE 3 : Delete User Notes
router.delete('/deleteNote/:id',fetchUser,async (request,response)=>{

    try {

            
            let note = await Notes.findById(request.params.id);
            if(!note){
                return response.status(404).json({result:"notes does not exist"});
            }else{
                
                if(note.user.toString() !== request.user.id){
                    return response.status(401).json({result:"Unauthorized access"});
                }else{
                   result = await Notes.findByIdAndDelete(request.params.id);
                   return response.json({result:"note deleted successfully"});

                }
            }
            
        
    } catch (error) {
        console.log(error);
        return response.status(500).json({"error":"Internal Server Error"});
    }
    
});


module.exports = router;