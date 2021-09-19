const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.clientes = require("./clientes.model.js")(sequelize, Sequelize);
db.dadosConcessionarias = require("./dadosConcessionarias.models.js")(sequelize, Sequelize);
db.analiseTecnica = require("./analiseTecnica.model.js")(sequelize, Sequelize);
db.analiseComercial = require("./analiseComercial.model.js")(sequelize, Sequelize);
db.clientes.hasMany(db.dadosConcessionarias);
db.clientes.hasMany(db.analiseTecnica);
db.clientes.hasMany(db.analiseComercial);

module.exports = db;