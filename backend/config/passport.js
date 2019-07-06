const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// need postgres?
const bcrypt = require('bycrptjs');

// Query that is passed to the database
const authQuery = 'SELECT id, email, password, type FROM users WHERE email=$1';


passport.use(
  new LocalStrategy((email, password, cb) => {
    db.query(authQuery, [email], (err, result) => {
      if (err) {
        winston.error('Error when selecting user on login', err);
        return cb(err);
      }

      if (result.rows.length > 0) {
        const first = result.rows[0];
        bcrypt.compare(password, first.password, function(err, res) {
          if (res) {
              console.log(first.email)
            cb(null, { id: first.id, email: first.email }); // If successful, pass the { user object } which consists of user.id && user.email
          } else {
            cb(null, false);
          }
        });
      } else {
        cb(null, false);
      }
    });
  })
);
