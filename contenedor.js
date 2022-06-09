const fs = require('fs');

module.exports = class Contenedor {
    constructor(nombre){
        this.nombre = nombre
        this.id = 1
    }
    store(object){
        let data = fs.readFileSync(`./${this.nombre}`,'utf-8');
        let productList = JSON.parse(data).products;
        let product = object;
        object.id = this.id;
        this.id++
        productList.push(product)
        fs.writeFileSync(`./${this.nombre}`,JSON.stringify({products:productList}))
        return product;
    }
    getById(id){
        let data = fs.readFileSync(`./${this.nombre}`,'utf-8');
        let productList = JSON.parse(data).products;
        let product = productList.find(product=>product.id === id) ;
        if (producto != undefined ) {
            return product;
        } else {
            return {error: 'Producto no encontrado'}
        }
    }
    update(id,{title,price,thumbnail}){
        let product = this.getById(id);
        for (let key in product) {
            if (key =='title') {
                product.title = title
            } else if (key == 'price') {
                product.price = price
            } else {
                product.thumbnail = thumbnail
            }
        }
        return product
    }
    getAll(){
        let data = fs.readFileSync(`./${this.nombre}`,'utf-8');
        let productList = JSON.parse(data);
        return productList;
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