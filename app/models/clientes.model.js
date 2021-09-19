module.exports = (sequelize, Sequelize) => {
    const Clientes = sequelize.define("clientes", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: Sequelize.STRING,
        },
        codigoUC: {
            type: Sequelize.STRING,
        },
        UCsCompensacao: {
            type: Sequelize.JSONB,
        },
        localizacao: {
            type: Sequelize.STRING,
        },
        CEP: {
            type: Sequelize.STRING,
        },
        Bairro: {
            type: Sequelize.STRING,
        },
        Email: {
            type: Sequelize.STRING,
        },
        Telefone: {
            type: Sequelize.STRING,
        },
        CPF_CNPJ: {
            type: Sequelize.STRING,
        },
        ValorFormaPagamento: {
            type: Sequelize.TEXT,
        },
        Notas:{
            type: Sequelize.TEXT,
        },

    });
  
    return Clientes;
  };