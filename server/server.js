const express = require('express');
const db = require('./../db/config');

const app = express();

app.listen(3000, () => {
  console.log('Listening on localhost:3000');
});


module.exports = app;
