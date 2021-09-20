const { idle_in_transaction_session_timeout } = require("pg/lib/defaults");
const db = require("../models");
const analiseTecnica = db.analiseTecnica;
const Op = db.Sequelize.Op;

// Criar e Salvar um novo Dados Concessionária
exports.create = (req, res) => {
    // validar o Request
    if (!req.body.respostaTecnica ){
        res.status(400).send({
            message: "Não pode ficar vazio!"
        });
        return;
    }
    // Criando dados do Dados Concessionária
    const tecnica = {
        respostaTecnica: req.body.respostaTecnica,
        clienteId: req.body.clienteId
    };

    // Salvando os Dados Concessionárias no banco de dados
    analiseTecnica.create(tecnica)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Acontenceu um erro tentando criar um dados da Concessionária novo."
            });
        });
};

// Trás todos os Dados Concessionárias do banco de dados
exports.findAll = (req, res) => {
    analiseTecnica.findAll({ where: {} })
        .then(data => {
            res.send({ tecnicas: data });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Aconteceu um erro tentando trazer todos os dados da Concessionária."
            });
    });
};

// Trás um unico registro pelo id
exports.findOne = (req, res) => {
    const id = req.params.id;

    analiseTecnica.findByPk(id)
        .then(data => {
            res.send({ tecnica: data });
        })
        .catch(err =>{
            res.status(500).send({
                message: "Ocorreu um erro tentando Recuperar os dados da Concessionária de id="+id
            });
        });
};

// Faz a modificação conforme o id passado
exports.update = (req, res) => {
    const id = req.params.id;

    analiseTecnica.update(req.body, {
        where: { id: id}
    })
        .then(num => {
            if(num == 1){
                res.send({
                    message: "Dados da Concessionária foi atualizado com Sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possivel atualizar os dados da Concessionária de id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro Atualizando de id="+id
            });
        });
};

// Deleta o Dados Concessionária conforme o id passado
exports.delete = (req, res) => {
    const id = req.params.id;

    analiseTecnica.destroy({
        where: { id: id}
    })
        .then(num => {
            if(num == 1){
                res.send({
                    message: "Dados Concessionária deletado com Sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possivel deletar os dados da Concessionária com id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não foi possivel deletar o Dados Concessionária de id=" + id
            });
        });
};

// Deleta todos os Dados Concessionárias do banco de dados
exports.deleteAll = (req, res) => {
    analiseTecnica.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({message: `${nums} dados da Concessionária foram deletados com Sucesso!`});
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu um erro deletando todos os Dados Concessionárias."
            });
        });
};

// Procura todos os pelos registros de emai
exports.findEmail = (req, res) => {
    analiseTecnica.findAll({where: {email: req.body.cargaInstala } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Ocorreu um erro chamando dados da Concessionária pelo carga Instala."
            });
        });
};