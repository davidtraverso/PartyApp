// PostgreSQL connection
const { Pool, Client } = require('pg');

const client = new Client({
  user: 'coordin8',
  host: 'pgdb.accsoftwarebootcamp.com',
  database: 'accsoftwarebootcamp', // Need to confirm this is correct (how to get to coordin8)
  password: 'coordin8_rocks_2019', // ** Need to config this
  port: 5432
});

client
  .connect()
  .then(function() {
    console.log(`PG Connected to ${client.database} dB`);
  })
  .catch(function(err) {
    console.error('PG Connection error', err.stack);
  });

module.exports = client;
