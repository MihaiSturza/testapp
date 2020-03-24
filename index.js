const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World, nice to see the change");
});

app.listen(5000);
