const mysql = require('mysql');
const { HOST , PASS, USER, DATABASE } = require('../conf');

const coneccion = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASS,
  database: DATABASE
});

coneccion.connect(function(err) {
  if (err) throw err;
  console.log("Connected! to MYSQL");
});

coneccion.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

module.exports = {
  coneccion
}