const knex = require("knex");

const read = knex({
  client: "pg",
  connection: {
    host: '',
    user: '',
    password: '',
    database: '',
    port: ''
  }
});


module.exports = {
  read
};