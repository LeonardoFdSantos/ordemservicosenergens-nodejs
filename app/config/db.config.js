module.exports = {
    HOST: "localhost",
    USER: "leonardo",
    PASSWORD: "12345678",
    DB: "OrdemServicosEnergensTeste",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };