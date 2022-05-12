import Contenedor from './contenedor';

const express = require('express');
const app = express();
const PORT = 8080;

const contenedor = new Contenedor('productos.txt')
const productos = contenedor.getAll()
const productoRandom = (array)=>{
    return array[Math.floor(Math.random()*array.length)];
}

const server = app.listen(PORT,()=>{
    console.log(`Server listening to port ${server.address().port}`)
});

app.get('/productoRandom',(req,res) => {
    res.send({message: JSON.stringify(productoRandom(productos))})
});

app.get('/productos',(req,res) => {
    res.send({message: JSON.stringify(productos)})
});