const cnx = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "testdb2",
  synchronize: true,
  logging: true,
};

const Sequelize = require('sequelize');
const sequelize = new Sequelize(cnx.database, cnx.username, cnx.password, {
  host: cnx.host,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Chicken = require('../models/chicken.model.js')(sequelize, Sequelize);
 
module.exports = db;