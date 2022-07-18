//importando o express
const express = require("express");
//inicializando o express
const app = express();
//get busca informações
//put alterar informações
//post inserir informações
//delete remover informações
app.get("/primeira-rota", (request, response) => {
    return response.json({
        message:"Acessou a primeira Rota de usuário",
    });
});
// ou da forma mais longa response.send(JSON.stringify({
//message:"Rota de usuário",
app.listen(4002, () => console.log("O Servido está rodando na porta 4002"));