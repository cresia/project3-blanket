// const express = require("express");

// const PORT = process.env.PORT || 3001;

// const app = express();

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
require('./app/models/inventory.model.js');
// Configuring the database
require('dotenv').config();
const mongoose = require('mongoose');
// Connecting to the database
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });
require('./app/routes/inventory.router.js')(app);
// Create a Server
const server = app.listen(3000, function () {
  const host = server.address().address
  const port = server.address().port
  console.log("App listening at http://%s:%s", host, port)
})
