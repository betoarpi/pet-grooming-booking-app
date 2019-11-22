const joi = require('@hapi/joi');

const idStructure = /^[0-9a-fA-F]{24}$/;
const clientIdSchema = joi.string().regex(idStructure);
const fullNameSchema = joi.string().max(200);
const phoneSchema = joi.string().max(15);
const addressSchema = joi.string().max(300);
const postalCodeSchema = joi
  .number()
  .integer()
  .positive();
const avatarSchema = joi.string().max(500);
const emailSchema = joi.string().email();
const usernameSchema = joi.string().max(80);
const passwordSchema = joi
  .string()
  .min(8)
  .max(80);
const isAdminSchema = joi.boolean();

const createClientSchema = {
  fullName: fullNameSchema,
  phone: phoneSchema,
  address: addressSchema,
  postalCode: postalCodeSchema,
  avatar: avatarSchema,
  email: emailSchema.required(),
  username: usernameSchema.required(),
  password: passwordSchema.required(),
  isAdmin: isAdminSchema
};

const createProviderClientSchema = {
  fullName: fullNameSchema,
  phone: phoneSchema,
  address: addressSchema,
  postalCode: postalCodeSchema,
  avatar: avatarSchema,
  email: emailSchema.required(),
  username: usernameSchema.required(),
  password: passwordSchema.required(),
  isAdmin: isAdminSchema,
  apiKeyToken: joi.string().required()
};

const updateClientSchema = {
  fullName: fullNameSchema,
  phone: phoneSchema,
  address: addressSchema,
  postalCode: postalCodeSchema,
  avatar: avatarSchema,
  email: emailSchema,
  username: usernameSchema,
  password: passwordSchema,
  isAdmin: isAdminSchema
};

module.exports = {
  clientIdSchema,
  createClientSchema,
  updateClientSchema,
  createProviderClientSchema
};
