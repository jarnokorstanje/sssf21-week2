const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const {getUserLogin} = require('../models/userModel');

passport.use(
  new Strategy((username, password, done) => {
    const user = getUserLogin(username);
    if (user === undefined) {
      return done(null, false);
    }
    if (user.password !== password) {
      return done(null, false);
    }
    return done(null, user.id);
  })
);

module.exports = passport;
