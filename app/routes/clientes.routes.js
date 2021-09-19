module.exports = app => {
    const clientes = require("../controllers/clientes.controller.js");

    var router = require("express").Router();

    //Criando um novo Cliente
    router.post("/", clientes.create);

    // Trazendo todos os clientes
    router.get("/", clientes.findAll);

    // Trazendo um unico cliente pelo id
    router.get("/:id", clientes.findOne);

    // Fazendo a atualização do cliente
    router.put("/:id", clientes.update);

    // Deletando um unico cliente.
    router.delete("/:id", clientes.delete);

    // Deletando todos os clientes.
    router.delete("/", clientes.deleteAll);

    app.use('/api/clientes', router);

}