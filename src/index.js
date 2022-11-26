const express = require('express');
const route = require('./routes/Route.js');
const mongoose = require('mongoose');
const app = express();
const multer=require('multer');
app.use(multer().any())


app.use(express.json());

mongoose.connect("mongodb+srv://birendrakumar:8298533971@cluster0.itvggca.mongodb.net/project02",
{ UseNewUrlParser: true })
    .then(() => console.log("MongoDb is Connected"))
    .catch(err => console.log(err))

app.use('/', route);
app.listen(3001, function () {
    console.log('Express app running on port'+  3001)
});