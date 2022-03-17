const mysql = require('mysql2');

const connect = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'curd',
});

connect.connect((e) => (e ? console.log(e) : console.log('connected')));

module.exports = connect;
