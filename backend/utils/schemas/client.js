const joi = require('@hapi/joi');

const idStructure = /^[0-9a-fA-F]{24}$/;

const clientIdSchema = joi.string().regex(idStructure);
const userIdSchema = joi.string().regex(idStructure);
const usernameSchema = joi.string().max(80);
const passwordSchema = joi
  .string()
  .min(8)
  .max(80);
const favoritesSchema = joi.array().items(joi.string().regex(idStructure));

const createClientSchema = {
  username: usernameSchema.required(),
  password: passwordSchema.required(),
  user_id: userIdSchema.required()
};

const updateClientSchema = {
  username: usernameSchema,
  password: passwordSchema,
  favorites: favoritesSchema,
  user_id: userIdSchema
};

module.exports = {
  clientIdSchema,
  createClientSchema,
  updateClientSchema
};
