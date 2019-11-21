const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const axios = require('axios');
const { config } = require('../../../config');

passport.use(
  new BasicStrategy(async (email, password, callBack) => {
    try {
      const { data, status } = await axios({
        url: `${config.apiUrl}/api/auth/sign-in`,
        method: 'post',
        auth: {
          password,
          username: email,
        },
        data: {
          apiKeyToken: config.clientApiKeyToken,
        },
      });
      console.log(data);
      if (!data || status !== 200) {
        return callBack(boom.unauthorized(), false);
      }

      return callBack(null, data);
    } catch (error) {
      return callBack(error);
    }
    // eslint-disable-next-line comma-dangle
  })
);
