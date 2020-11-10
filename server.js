const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());


// conexão com o banco  
mongoos.connect('mongodb://localhost:27017/dbfreela',
    { useNewUrlParser: true, useUnifiedTopology: true }
)

requireDir('./src/models')

app.use('/api', require('./src/models'))

app.listen(3001);