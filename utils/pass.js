const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const {getUserLogin} = require('../models/userModel');

passport.use(
  new Strategy((username, password, done) => {
    const user = getUserLogin(username);
    console.log(user);

    if (user === undefined) {
      return done(null, false);
    }
    if (user.password !== password) {
      return done(null, false);
    }
    delete user.password;
    return done(null, user);
  })
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: '1234',
    },
    (jwtPayload, done) => {
      console.log('payload: ', jwtPayload);
      const user = getUserLogin(jwtPayload.email);
      if (user === undefined) {
        return done(null, false);
      }
      return done(null, jwtPayload);
    }
  )
);

module.exports = passport;
