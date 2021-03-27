var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', // assign your host name
  user: 'root',      //  assign your database username
  password: 'heureux301099',      // assign your database password
  database: 'restapi' // assign database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;