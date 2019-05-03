var express = require('express');
var router = require('../src/routes/index');
var app = express();
const cors = require('cors');
require('dotenv').config();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 5000 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

app.use('/api', router);



app.listen(PORT,()=>{
    console.log('Server is running on',PORT);
})