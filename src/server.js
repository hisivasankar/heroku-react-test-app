const express = require("express");

const app = express();

app.get("/random", function(req, res) {
  const data = {
    random: Math.round(Math.random() * 100)
  };
  res.json(data);
});

const port = process.env.PORT || 5000;

app.listen(port, function(err) {
  if (!err) {
    console.log(`App started at ${port}`);
  }
});
