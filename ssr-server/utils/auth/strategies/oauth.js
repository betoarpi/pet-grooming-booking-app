/* eslint-disable comma-dangle */
const passport = require('passport');
const axios = require('axios');
const boom = require('@hapi/boom');
const { OAuth2Strategy } = require('passport-oauth');
const { config } = require('../../../config');

const GOOGLE_AUTHORIZATION_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_TOKEN_URL = 'https://www.googleapis.com/oauth2/v4/token';
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';

const oAuth2Strategy = new OAuth2Strategy(
  {
    authorizationURL: GOOGLE_AUTHORIZATION_URL,
    tokenURL: GOOGLE_TOKEN_URL,
    clientID: config.googleClientId,
    clientSecret: config.googleClientSecret,
    callbackURL: '/auth/google-oauth/callback',
  },
  async (accessToken, refreshToken, profile, callBack) => {
    const { data, status } = await axios({
      url: `${config.apiUrl}/api/auth/sign-provider`,
      method: 'post',
      data: {
        username: profile.name,
        email: profile.email,
        password: profile.id,
        apiKeyToken: config.clientApiKeyToken,
      },
    });

    if (!data || status !== 200) {
      return callBack(boom.unauthorized(), false);
    }

    return callBack(null, data);
  }
);

oAuth2Strategy.userProfile = function (accessToken, done) {
  this._oauth2.get(GOOGLE_USERINFO_URL, accessToken, (error, body) => {
    if (error) {
      return done(error);
    }
    try {
      const { sub, name, email } = JSON.parse(body);
      const profile = {
        id: sub,
        name,
        email,
      };
      return done(null, profile);
    } catch (parseError) {
      return done(parseError);
    }
  });
};

passport.use('google-oauth', oAuth2Strategy);
