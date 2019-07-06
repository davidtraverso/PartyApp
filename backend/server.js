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

// ROUTES
app.get('/', (req, res) => res.send('Hello World!'));

/* *** DASHBOARD ROUTES *** */
// GET for main landing page
app.get('/app/main', (req, res) => res.send('App main reached!'));

// TEST ROUTE to ensure '/create' route exists.
app.get('/create', (req, res) => res.status(200).send('Successful GET, coordin8!'));

/* *** SIGN UP ROUTES *** */

// POST handler for /signUps/Forms React app.
app.post('/create', function(req, res) {
  let data = req.body;
  // Test data
  console.log(data);

  let query = `INSERT INTO parties 
                      (id, party_type, party_name, start_month, start_year, locations_id) 
                  VALUES (DEFAULT, '${data.type}', '${data.name}', ${data.month}, ${
    data.year
  }, (SELECT id FROM locations WHERE city='${data.city}'));
  INSERT INTO users (id, first_name, last_name, phone, email, password, parties_id, locations_id, roles_id) 
  VALUES (DEFAULT, '${data.uName}', '', ${data.uPhone}, '${data.uEmail}', '${data.uPassword}', 
  (SELECT id FROM parties WHERE party_name='${data.name}'), 
  (SELECT id FROM locations WHERE city='${data.city}'),
  1)`;
  //  Test query
  console.log(query);

  // Run query
  client.query(query, function(err, party) {
    if (err) {
      console.log('Error: ', err);
      res.status(400).send({ code: 1239, message: 'Insert Error: ' + err });
    }
    console.log(party);
    res.status(200).send('Successful creation of:' + data.name);
  });
});

/* *** Static site Login *** */
app.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard', // Need to update URL
    failureRedirect: '/users/login', // How to redirect to same page with same form visible
    failureFlash: true // Need to set up flash messages
  })(req, res, next);
});

app.get('*', (req, res) => res.send('INCORRECT ROUTE'));

// App.listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
