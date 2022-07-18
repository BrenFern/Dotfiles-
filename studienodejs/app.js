//importando o express
const express = require("express");
//inicializando o express
const app = express();
//usando um randomUUID
const {randomUUID} = require("crypto");
//middleware para receber requesições em json
app.use(express.json());


/**
 * get busca informações
 * put alterar informações
 * post inserir informações
 * delete remover informações
 */

/**
 * body => sempre que eu quiser enviar dados para minha aplicação
 * params => parâmetros de rota, exemplo /product/245654
 * Query => Sempre que vamos filtrar, exemplo /product?id=34093490343043943
 */

const products = [];

app.post("/products", (request, response) =>{
    // nome e preço
    const {name, price} = request.body;
const product = {
        name,
        price,
        id: randomUUID(),
    };
    
    products.push(product);

   return response.json(product);

});

app.get("/products", (request, response) =>{
    return response.json(products);
});

app.get("/products/:id", (request, response) => {
    const { id } = request.params;
    const product = products.find((product) => product.id === id);
    return response.json(product);
});

app.listen(4002, () => console.log("O Servido está rodando na porta 4002"));