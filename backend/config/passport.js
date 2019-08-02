const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const client = require('./db');

module.exports = function(passport) {
  // Query that is passed to the database
  const authQuery = 'SELECT id, first_name, last_name, email, password, parties_id FROM users WHERE email= $$';

  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, cb) => {
      console.log(authQuery + email + '$$ LIMIT 1;');
      let myquery = authQuery + email + '$$ LIMIT 1;';
      console.log('myquery is ', myquery);

      // This code doesn't run
      client.query(myquery, function(err, result) {
        // if error:
        if (err) {
          console.error('Error when selecting user on login', err);
          return cb(err);

          // if success
        } else if (result.rows.length > 0) {
          // assign the first row of data to 'first'
          let first = result.rows[0];
          console.log(first);

          // compare the submitted password with the db password
          bcrypt.compare(password, first.password, function(err, res) {
            console.log(`user password: ${password} and db password: ${first.password}`);
            if (res) {
              console.log('bcrypt.compare if(res) happened');
              cb(null, { id: first.id, email: first.email }); // If successful, pass the { user object } which consists of user.id && user.email
            } else {
              console.log('bcrypt.compare else happened', err);
              cb(null, false);
            }
          });

          // if no error && no results found
        } else {
          console.log('else happened');
          cb(null, false);
        }
      });
    })
  );
};
