module.exports = app => {
    const analiseTecnica = require("../controllers/analiseTecnica.controller.js");

    var router = require("express").Router();

    //Criando um novo Cliente
    router.post("/", analiseTecnica.create);

    // Trazendo todos os analiseTecnica
    router.get("/", analiseTecnica.findAll);

    // Trazendo um unico cliente pelo id
    router.get("/:id", analiseTecnica.findOne);

    // Fazendo a atualização do cliente
    router.put("/:id", analiseTecnica.update);

    // Deletando um unico cliente.
    router.delete("/:id", analiseTecnica.delete);

    // Deletando todos os analiseTecnica.
    router.delete("/", analiseTecnica.deleteAll);

    app.use('/api/tecnica', router);

}