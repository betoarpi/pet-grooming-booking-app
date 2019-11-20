const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const ClientService = require('../../../services/clients');

passport.use(
  new BasicStrategy(async function(email, password, callBack) {
    const clientService = new ClientService();
    try {
      const user = await clientService.getClientByEmail({ email });
      if (!user) {
        return callBack(boom.unauthorized(), false);
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return callBack(boom.unauthorized(), false);
      }

      delete user.password;

      return callBack(null, user);
    } catch (error) {
      return callBack(error, null);
    }
  })
);
