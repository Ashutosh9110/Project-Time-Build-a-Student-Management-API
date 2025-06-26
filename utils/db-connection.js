const mysql = require("mysql2")


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test"
})

connection.connect((err) => {
  if(err){
    console.log(err);
    return
  }
  console.log("Connection has been created");
})


const studentsTable = `CREATE TABLE IF NOT EXISTS students(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  age INT
)`

connection.execute(studentsTable, (err) => {
  if(err) {
    console.log(err);
    return
  }
})

module.exports = connection