module.exports = {
    HOST: "localhost",
    USER: "haritz",
    PASSWORD: "123",
    DB: "paladins",
    dialect: "mysql",
    pool: {
      max: 105,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  