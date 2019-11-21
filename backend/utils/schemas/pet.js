const joi = require('@hapi/joi');

const idStructure = /^[0-9a-fA-F]{24}$/;

const petIdSchema = joi.string().regex(idStructure);
const clientIdSchema = joi.string().regex(idStructure);
const nameSchema = joi
  .string()
  .max(80)
  .min(1);
const typeSchema = joi.string().valid('cat', 'dog');

const createPetSchema = {
  name: nameSchema.required(),
  type: typeSchema.required(),
  client_id: clientIdSchema.required()
};

const updatePetSchema = {
  name: nameSchema,
  type: typeSchema,
  client_id: clientIdSchema
};

module.exports = {
  petIdSchema,
  createPetSchema,
  updatePetSchema
};
