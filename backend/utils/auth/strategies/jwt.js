const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');
const ClientService = require('../../../services/clients');
const { config } = require('../../../config/index');

passport.use(
  new Strategy(
    {
      secretOrKey: config.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async function(tokenPayload, callBack) {
      const clientService = new ClientService();
      try {
        const user = await clientService.getClientByEmail({
          email: tokenPayload.email
        });
        if (!user) {
          return callBack(boom.unauthorized(), false);
        }

        delete user.passport;

        return callBack(null, { user, scopes: tokenPayload.scopes });
      } catch (error) {
        return callBack(error);
      }
    }
  )
);
