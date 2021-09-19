module.exports = app => {
    const dadosConcessionarias = require("../controllers/dadosConcessionarias.controller.js");

    var router = require("express").Router();

    //Criando um novo Cliente
    router.post("/", dadosConcessionarias.create);

    // Trazendo todos os dadosConcessionarias
    router.get("/", dadosConcessionarias.findAll);

    // Trazendo um unico cliente pelo id
    router.get("/:id", dadosConcessionarias.findOne);

    // Fazendo a atualização do cliente
    router.put("/:id", dadosConcessionarias.update);

    // Deletando um unico cliente.
    router.delete("/:id", dadosConcessionarias.delete);

    // Deletando todos os dadosConcessionarias.
    router.delete("/", dadosConcessionarias.deleteAll);

    app.use('/api/concessionarias', router);

}