const mongoose = require('mongoose');
const mongoURI="mongodb+srv://rpomal:Rishi123@cluster0.sajssh8.mongodb.net/iNotebook";


const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log('Connected to mongodb successfully');
    })
}

module.exports = connectToMongo;