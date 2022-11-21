const express = require('express');
const route = require('./Routes/route.js');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://birendrakumar:8298533971@cluster0.itvggca.mongodb.net/project02",
{ UseNewUrlParser: true })
    .then(() => console.log("MongoDb is Connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port'+ (process.env.PORT || 3000))
});