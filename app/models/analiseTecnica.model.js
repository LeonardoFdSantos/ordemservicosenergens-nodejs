module.exports = (sequelize, Sequelize) => {
    const respostaTecnica = sequelize.define("respostaTecnica", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        respostaTecnica: {
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
    return respostaTecnica;
  };