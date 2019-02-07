

const Sequelize = require('sequelize');
//CONEXION TO MYSQL
const sequelize = new Sequelize('cambalacheBD', 'postgres', process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  });

  module.exports = sequelize;
  //-----------------------------------------------