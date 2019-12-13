const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

const routes = require('./routes');

mongoose.connect('mongodb://Caio:caio@air-shard-00-00-gkjoe.mongodb.net:27017,air-shard-00-01-gkjoe.mongodb.net:27017,air-shard-00-02-gkjoe.mongodb.net:27017/airtattoo?ssl=true&replicaSet=Air-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

// GET, POST, PUT, DELETE  METODOS BASE DA APLICAÇÃO

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params ( para edição, delete)
//req.body = Acessar corpo da requisição(criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')));
app.use(routes);


app.listen(3333);




