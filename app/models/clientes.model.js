module.exports = (sequelize, Sequelize) => {
    const Clientes = sequelize.define("clientes", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        codigoUC: {
            type: Sequelize.STRING,
            allowNull: false
        },
        UCsCompensacao: {
            type: Sequelize.JSONB,
            allowNull: true
        },
        localizacao: {
            type: Sequelize.STRING,
            allowNull: false
        },
        CEP: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Bairro: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Telefone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        CPF_CNPJ: {
            type: Sequelize.STRING,
            allowNull: false
        },
        ValorFormaPagamento: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        Notas:{
            type: Sequelize.TEXT,
            allowNull: true
        }
    }
    ,{
        timestamps: false,
        });
  
    return Clientes;
  };