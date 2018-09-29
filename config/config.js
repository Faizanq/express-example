module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '123',
    database: process.env.DB_NAME || 'node_sequelize',
    host: process.env.DB_HOSTNAME || 'localhost',
    dialect: 'mysql',
    // use_env_variable: 'DATABASE_URL'
  }
};
