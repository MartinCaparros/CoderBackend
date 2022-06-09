const express = require('express');
const {Router} = express;
const app = express();
const router = Router();
const PORT = 8080;
const motor = require('./contenedor.js');

const Contenedor = new motor('productos.txt');

const server = app.listen(PORT,()=>{
    console.log(`Server listening to port ${server.address().port}`)
});

app.use('/api/productos',router);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

router.get('/',(req,res) => {
    res.send({message: Contenedor.getAll()})
});
router.get('/:id',(req,res) => {
    
    res.send({message: JSON.stringify(Contenedor.getById(req.params.id))})
});
router.post('/',(req,res) => {
    
    res.send({message: JSON.stringify(Contenedor.store(req.body))})
});
router.put('/:id',(req,res) => {
    res.send({message: JSON.stringify(Contenedor.update(req.params.id,req.body))})
});
router.delete('/:id',(req,res) => {
    Contenedor.delete(req.body)
    res.send({message: "Producto eliminado"})
});
