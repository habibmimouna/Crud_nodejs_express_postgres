const express = require('express');
const routes = require('./routes/chicken.routes');
const farmroutes = require('./routes/farmyard.routes');
const app = express();
app.use(express.json());

const db = require("./models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use('/chicken', routes );
app.use('/farmyard', farmroutes );


 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});