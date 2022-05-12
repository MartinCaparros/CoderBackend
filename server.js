
const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT,()=>{
    console.log(`Server listening to port ${server.address().port}`)
});

server.on('error',error => console.log(`Error en el servidor del tipo ${error}}`));

app.get('/',(req,res) => {
    res.send('<h1 style="color:blue">Bienvenidos al servidor express<h1/>')
});
let sumaVisitas = 0;
const sumarVisitas = ()=>{
    sumaVisitas++
}
app.get('/visitas',(req,res) => {
    sumarVisitas()
    res.send(`<h1 style="color:blue">Ya recibimos ${sumaVisitas} visitas!<h1/>`)
});