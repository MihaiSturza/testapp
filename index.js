const express = require("express");
const app = express();

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "pushtoken.cxy1a4hn8hof.eu-central-1.rds.amazonaws.com",
  user: "mimi",
  password: "Odxll9QBlWaBV092cgEg",
  database: "tokens"
});

connection.connect();

app.get("/", (req, res) => {
  connection.query("SELECT * FROM `token`", (err, response, fields) => {
    res.send(response);
  });
});

app.listen(5000);
