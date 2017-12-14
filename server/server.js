const express = require('express');
const db = require('./../db/config');
const path = require('path');

const app = express();

// Serve up static files
app.use(express.static(path.join(__dirname, '../client/public/dist')));

app.listen(3000, () => {
  console.log('Listening on localhost:3000');
});


module.exports = app;
