module.exports = app => {
    const analiseComercial = require("../controllers/analiseComercial.controller.js");

    var router = require("express").Router();

    //Criando um novo Cliente
    router.post("/", analiseComercial.create);

    // Trazendo todos os analiseComercial
    router.get("/", analiseComercial.findAll);

    // Trazendo um unico cliente pelo id
    router.get("/:id", analiseComercial.findOne);

    // Fazendo a atualização do cliente
    router.put("/:id", analiseComercial.update);

    // Deletando um unico cliente.
    router.delete("/:id", analiseComercial.delete);

    // Deletando todos os analiseComercial.
    router.delete("/", analiseComercial.deleteAll);

    app.use('/api/comercial', router);

}