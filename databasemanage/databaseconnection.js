var Sequelize = require('sequelize-cockroachdb');
var fs = require('fs');

var sequelize = new Sequelize('scriptpets', 'maxroach', 'PasswordMans',{
  host:'script-pets-649.gcp-us-west2.cockroachlabs.cloud',
  dialect: 'postgres',
  port: 26257,
  logging: console.log,
  dialectOptions: {
    ssl: {
               cert: fs.readFileSync('./certs/script-pets-ca.crt')
                   .toString()
           }
      }
});

//this is our database connection
module.exports = sequelize
