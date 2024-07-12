const connectToMongo = require('./db');
const express = require('express')


connectToMongo();
const app = express();
app.use(express.json());
/*
app.get('/', function (req, res) {
  res.send('Hello World')
});*/

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));


app.listen(3000);