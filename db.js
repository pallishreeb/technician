const mysql = require('mysql2');

const pool = mysql.createPool({
  host: "159.65.254.52",
  user: "psvbwytbny",
  password: "q4nb2Ccd4d",
  port: 3306,
  database: "psvbwytbny",
  connectionLimit: 10, // Adjust as needed
});

// You don't need the connection.connect() part when using a pool

module.exports = pool;

