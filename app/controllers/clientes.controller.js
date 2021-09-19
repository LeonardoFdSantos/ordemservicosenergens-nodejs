const { idle_in_transaction_session_timeout } = require("pg/lib/defaults");
const db = require("../models");
const Cliente = db.clientes;
const Op = db.Sequelize.Op;

// Criar e Salvar um novo Cliente
exports.create = (req, res) => {
    // validar o Request
    if (!req.body.nome || !req.body.codigoUC || !req.body.localizacao || !req.body.CEP 
        || !req.body.Bairro || !req.body.Email || !req.body.Telefone || !req.body.CPF_CNPJ ){
        res.status(400).send({
            message: "Não pode ficar vazio!"
        });
        return;
    }
    // Criando dados do Cliente
    const cliente = {
        nome: req.body.nome, 
        codigoUC: req.body.codigoUC,
        UCsCompensacao: req.body.UCsCompensacao,
        localizacao: req.body.localizacao,
        CEP: req.body.CEP,
        Bairro: req.body.Bairro,
        Email: req.body.Email,
        Telefone: req.body.Telefone,
        CPF_CNPJ: req.body.CPF_CNPJ,
        ValorFormaPagamento: req.body.ValorFormaPagamento,
        Notas: req.body.Notas
    };

    // Salvando os Clientes no banco de dados
    Cliente.create(cliente)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Acontenceu um erro tentando criar um cliente novo."
            });
        });
};

// Trás todos os Clientes do banco de dados
exports.findAll = (req, res) => {
    const nome = req.query.Nome;
    var condition = nome ? { Nome: { [Op.iLike]: `%${nome}%` } } : null;

    Cliente.findAll({ where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Aconteceu um erro tentando trazer todos os clientes."
            });
    });
};

// Trás um unico registro pelo id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Cliente.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: "Ocorreu um erro tentando Recuperar o Cliente de id="+id
            });
        });
};

// Faz a modificação conforme o id passado
exports.update = (req, res) => {
    const id = req.params.id;

    Cliente.update(req.body, {
        where: { id: id}
    })
        .then(num => {
            if(num == 1){
                res.send({
                    message: "Cliente foi atualizado com Sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possivel atualizar o Cliente de id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro Atualizando de id="+id
            });
        });
};

// Deleta o Cliente conforme o id passado
exports.delete = (req, res) => {
    const id = req.params.id;

    Cliente.destroy({
        where: { id: id}
    })
        .then(num => {
            if(num == 1){
                res.send({
                    message: "Cliente deletado com Sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possivel deletar o Cliente com id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não foi possivel deletar o cliente de id=" + id
            });
        });
};

// Deleta todos os Clientes do banco de dados
exports.deleteAll = (req, res) => {
    Cliente.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({message: `${nums} Clientes foram deletados com Sucesso!`});
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu um erro deletando todos os clientes."
            });
        });
};

// Procura todos os pelos registros de emai
exports.findEmail = (req, res) => {
    Cliente.findAll({where: {email: req.body.Email } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Ocorreu um erro chamando clientes pelo Email."
            });
        });
};