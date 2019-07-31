const express = require('express');
const app = express();
var morgan = require('morgan');
morgan('tiny');
const port = 3005; // eventually add 'process.env.PORT || ' back to this

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
//
//
//
//

/* *** DASHBOARD ROUTES *** */
// GET for main landing page
app.get('/app/main', (req, res) => {
  let userEmail = 'david@yahoo.com'; //req.body.user;
  // Test userEmail
  console.log('Dashboard GET // Query email: ' + userEmail);

  let query = `SELECT 
  t.parties_id as "partyID",
  p.party_name as "partyName", 
  p.party_type as "partyType",
  CONCAT(l.city,', ', l.state) as "partyLocation",
  t.users_id as "userID",
  u.first_name as "firstName",
  u.last_name as "lastName",
  u.roles_id as "role",
  u.locations_id as "userLocation"
FROM parties p 
  JOIN user_party_role t ON p.id=t.parties_id
  JOIN users u ON t.users_id=u.id
  JOIN locations l ON p.locations_id=l.id
WHERE p.id=(
  SELECT parties_id
  FROM users WHERE email='${userEmail}')

  SELECT 
  u.first_name as "firstName",
  u.last_name as "lastName",
  u.phone as "phone",
  u.email as "email",
  CONCAT(l.city, ' ,', l.state) as "location",
  u.roles_id as "role"
  FROM users u JOIN locations l ON u.locations_id=l.id
  WHERE u.parties_id=(SELECT parties_id from users where email='jason@gmail.com')`;

  // Run query
  client.query(query, function(err, response) {
    if (err) {
      console.log('Error: ', err);
      res.status(400).send({ code: 1239, message: 'Insert Error: ' + err });
    }
    // Convert database results to JSON
    let successResponse = JSON.stringify(response.rows);

    // Send status and response
    res.status(200).send(successResponse);
  });
});

/* *** ACCOUNT SETTINGS *** */
/* GET */
app.get('/app/account', (req, res) => {
  let userEmail = 'jason@gmail.com'; //req.body.user;
  // Test userEmail
  console.log('Account GET // Query email: ' + userEmail);

  // Query definition
  let query = `SELECT
    u.first_name as "firstName",
    u.last_name as "lastName",
    u.phone as "phone",
    u.email as "email",
    u.password as "password",
    CONCAT(l.city, ', ', l.state) as "location" 
  FROM users u 
    JOIN locations l ON u.locations_id=l.id
  WHERE u.email='${userEmail}'`;

  // Run query
  client.query(query, function(err, response) {
    if (err) {
      console.log('Error: ', err);
      res.status(400).send({ code: 1239, message: 'Insert Error: ' + err });
    }
    // Verify success
    console.log('Successful database query!');
    // Convert database results to JSON
    let successResponse = JSON.stringify(response.rows);
    console.log(successResponse);

    // Test sending
    console.log('sent JSON to Account Component');
    // Send status and response
    res.status(200).send(successResponse);
  });
});

/* PUT */
app.put('/app/account', (req, res) => {
  console.log('PUT request received.');
  console.log(req.body);
  let data = req.body;
  // Test data
  console.log(`PUT succesfully received: ${data}`);

  let query = `UPDATE users
               SET phone = ${data.phone},
                   password = '${data.password}'
               WHERE email = '${data.email}'`;
  //  Test query
  console.log(query);

  // Run query
  client.query(query, function(err, user) {
    if (err) {
      console.log('Error: ', err);
      res.status(400).send({ code: 1239, message: 'Insert Error: ' + err });
    }
    console.log(user);
    res.status(202).send('Successful update of your account, ' + data.name);
  });
});

/* *** ATTENDEES ROUTES *** */
/* GET */
app.get('/app/attendees', (req, res) => {
  let userEmail = 'jason@gmail.com'; //req.body.user;
  // Test userEmail
  console.log('Account GET // Query email: ' + userEmail);

  let query = `SELECT 
  u.first_name as "firstName",
  u.last_name as "lastName",
  u.phone as "phone",
  u.email as "email",
  CONCAT(l.city, ' ,', l.state) as "location",
  u.roles_id as "role"
  FROM users u JOIN locations l ON u.locations_id=l.id
  WHERE u.parties_id=(SELECT parties_id from users where email='jason@gmail.com')`;

  // Run query
  client.query(query, function(err, response) {
    if (err) {
      console.log('Error: ', err);
      res.status(400).send({ code: 1239, message: 'Insert Error: ' + err });
    }
    // Verify success
    console.log('Successful database query!');
    // Convert database results to JSON
    let successResponse = JSON.stringify(response.rows);
    console.log(successResponse);

    // Test sending
    console.log('sent JSON to Account Component');
    // Send status and response
    res.status(200).send(successResponse);
  });
});

/* *** ITINERARY ROUTES *** */
// Jason's GET request goes here:

app.get('/app/itinerary', (req, res) => {
  let userEmail = 'david@yahoo.com'; //req.body.user;
  // Test userEmail
  console.log('Dashboard GET // Query event: ' + userEmail);

  let query = `SELECT
  e.id as "id",
  e.event_name as "name",
  e.event_date as "date",
  e.event_start as "startTime",
  e.parties_id as "partyID",
CONCAT(l.city, ' ,', l.state) as "location"
FROM events e 
  JOIN coordin8schema.locations l ON e.event_location_id=l.id 
  where e.parties_id=100`;

  // Run query//

  client.query(query, function(err, response) {
    if (err) {
      console.log('Error: ', err);
      res.status(400).send({ code: 1239, message: 'Insert Error: ' + err });
    }
    // Convert database results to JSON
    let successResponse = JSON.stringify(response.rows);

    // Send status and response
    res.status(200).send(successResponse);
  });
});

/* *** END ITINERARY ROUTES *** */

/* *** SIGN UP ROUTES *** */
// POST handler for /signUps/Forms React app.
app.post('/create', function(req, res) {
  let data = req.body;
  // Test data
  console.log(data);

  let query = `
    INSERT INTO parties 
      (id, 
      party_type, 
      party_name, 
      start_month, 
      start_year, 
      locations_id) 
    VALUES 
      (DEFAULT, 
      '${data.type}', 
      $$${data.name}$$, 
      ${data.month}, 
      ${data.year}, 
        (SELECT id 
        FROM locations 
        WHERE city='${data.city}')
      );

    INSERT INTO users 
      (id, 
      first_name, 
      last_name, 
      phone, 
      email, 
      password, 
      parties_id, 
      locations_id, 
      roles_id) 
    VALUES 
      (DEFAULT, 
      $$${data.uName}$$, 
      '', 
      ${data.uPhone}, 
      '${data.uEmail}', 
      '${data.uPassword}', 
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
    res.status(201).send('Successful creation of:' + data.name, party);
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
