// eslint-disable-next-line linebreak-style
const Sequalize = require('sequelize');

const sequelize = new Sequalize('curd', 'root', 'root123', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
