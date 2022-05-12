const fs = require('fs');

export default class Contenedor {
    constructor(nombre){
        this.nombre = nombre
        this.id=0
    }
    save(object){
        let data = fs.readFileSync(`./${this.nombre}`,'utf-8');
        let productList = JSON.parse(data).products;
        let product = object;
        object.id = this.id;
        this.id++
        productList.push(product)
        fs.writeFileSync(`./${this.nombre}`,JSON.stringify({products:productList}))
    }
    getById(id){
        let data = fs.readFileSync(`./${this.nombre}`,'utf-8');
        let productList = JSON.parse(data).products;
        let product = productList.find(product=>product.id === id);
        console.log(product);
    }
    getAll(){
        let data = fs.readFileSync(`./${this.nombre}`,'utf-8');
        let productList = JSON.parse(data).products;
        console.log(productList);
    }
    deleteById(id){
        let data = fs.readFileSync(`./${this.nombre}`,'utf-8');
        let productList = JSON.parse(data).products;
        let productToDelete = productList.find(product=>product.id === id);
        let newProductList = productList.filter(product=>product.id!==productToDelete.id);
        fs.writeFileSync(`./${this.nombre}`,JSON.stringify({products:newProductList}));
    }
    deleteAll(){
        fs.writeFile(`./${this.nombre}`,JSON.stringify({products:[]}))
    }
}