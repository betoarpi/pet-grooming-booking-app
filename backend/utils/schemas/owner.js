const joi = require('@hapi/joi');

const idStructure = /^[0-9a-fA-F]{24}$/;
const ownerIdSchema = joi.string().regex(idStructure);
const firstNameSchema = joi.string().max(100);
const lastNameSchema = joi.string().max(100);
const phoneSchema = joi
  .array()
  .items(joi.string())
  .min(1);
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

const createOwnerSchema = {
  firstName: firstNameSchema.required(),
  lastName: lastNameSchema.required(),
  phone: phoneSchema.required(),
  address: addressSchema.required(),
  postalCode: postalCodeSchema.required(),
  avatar: avatarSchema,
  email: emailSchema.required(),
  username: usernameSchema.required(),
  password: passwordSchema.required()
};

const updateOwnerSchema = {
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  phone: phoneSchema,
  address: addressSchema,
  postalCode: postalCodeSchema,
  avatar: avatarSchema,
  email: emailSchema,
  username: usernameSchema,
  password: passwordSchema
};

module.exports = { ownerIdSchema, createOwnerSchema, updateOwnerSchema };
