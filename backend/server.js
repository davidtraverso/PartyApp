const express = require('express');
const app = express();
var morgan = require('morgan');
const port = process.env.PORT || 3005;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cross-origin resource sharing. Love it!
var cors = require('cors');
app.use(cors());

// PostgreSQL connection
const { Pool, Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'test_coordin8',
  password: '', // ** Need to tie in authentication
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



// ROUTES
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/newParty', (req, res) => res.send('Test Post!'));

// TEST ROUTE to ensure '/create' route exists.
app.get('/create', (req, res) => res.status(200).send('Successful GET, coordin8!'));

// POST handler for /signUps/Forms React app.
app.post('/create', function(req, res) {
  let data = req.body;
  let counter = 20;
  let query = `INSERT INTO parties 
                    (id, party_type, party_name, start_month, start_year, locations_id) 
                VALUES (${counter}, '${data.type}', '${data.name}', ${data.month}, ${data.year}, ${counter})`;
  console.log(query);
  //   client.query(query, function(err, party) {
  //     if (err) {
  //       console.log('Error: ', err);
  //       res.status(400).send({ code: 1239, message: 'Insert Error: ' + err });
  //     }
  //     console.log(party);
  //     res.status(200).send('Successful creation of:' + data.name);
  //   });
  res.send('Nice try!');
});

// App.listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`));