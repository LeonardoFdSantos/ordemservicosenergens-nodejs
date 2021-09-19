module.exports = (sequelize, Sequelize) => {
    const respostaComercial = sequelize.define("respostaComercial", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        respostaComercial: {
            type: Sequelize.JSONB,
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
    return respostaComercial;
  };