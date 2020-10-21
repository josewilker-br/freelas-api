const express = require('express');
const mongoose = require('mongoose');

const app = express()


// conexão com o banco  
mongoos.connect('mongodb://localhost:27017/dbfreela',
    { useNewUrlParser: true, useUnifiedTopology: true }
)

app.get('/',(rep, res) => {
    res.send("Minha Primeira Rota")
})

app.listen(3001);