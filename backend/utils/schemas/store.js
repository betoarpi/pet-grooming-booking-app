const joi = require('@hapi/joi');

const idStructure = /^[0-9a-fA-F]{24}$/;
const storeIdSchema = joi.string().regex(idStructure);
const nameSchema = joi.string().max(200);
const phoneSchema = joi
  .array()
  .items(joi.string())
  .min(1);
const addressSchema = joi.string().max(300);
const coordsSchema = joi.object({
  lat: joi
    .number()
    .precision(8)
    .required(),
  lng: joi
    .number()
    .precision(8)
    .required()
});
const shortDescriptionSchema = joi.string().max(152);
const fullDescriptionSchema = joi.string().max(1000);
const servicesSchema = joi
  .array()
  .items(
    joi.object({
      name: joi
        .string()
        .max(100)
        .required(),
      price: joi
        .number()
        .precision(2)
        .required()
    })
  )
  .min(1);
const otherServicesSchema = joi
  .array()
  .items(
    joi.object({
      name: joi
        .string()
        .max(100)
        .required(),
      price: joi
        .number()
        .precision(2)
        .required()
    })
  )
  .min(1);
const imagesSchema = joi
  .array()
  .items(joi.string().max(500))
  .min(4);

const ownerSchemaId = joi.string().regex(idStructure);

const createStoreSchema = {
  name: nameSchema.required(),
  phone: phoneSchema.required(),
  address: addressSchema.required(),
  coords: coordsSchema.required(),
  shortDescription: shortDescriptionSchema.required(),
  fullDescription: fullDescriptionSchema.required(),
  services: servicesSchema.required(),
  otherServices: otherServicesSchema,
  images: imagesSchema.required(),
  owner_id: ownerSchemaId.required()
};

const updateStoreSchema = {
  name: nameSchema,
  phone: phoneSchema,
  address: addressSchema,
  coords: coordsSchema,
  shortDescription: shortDescriptionSchema,
  fullDescription: fullDescriptionSchema,
  services: servicesSchema,
  otherServices: otherServicesSchema,
  images: imagesSchema,
  owner_id: ownerSchemaId
};

module.exports = { storeIdSchema, createStoreSchema, updateStoreSchema };
