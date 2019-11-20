const passport = require('passport');

//JWT Strategy
require('../auth/strategies/jwt');

function authProtect() {
  return passport.authenticate('jwt', { session: false });
}

module.exports = authProtect;
