module.exports = (sequelize, Sequelize) => {
    const dadosConcessionarias = sequelize.define("dadosConcessionarias", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        cargaInstala: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        padraoEntrada: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tensaoAtendimento: {
            type: Sequelize.STRING,
            allowNull: true
        },
        tipoConexao: {
            type: Sequelize.JSONB,
            allowNull: false
        },
        potenciaInstalada: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        potenciaModulos: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        potenciaInversores: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        numeroArranjos: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },{
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,      
      });    
    return dadosConcessionarias;
  };