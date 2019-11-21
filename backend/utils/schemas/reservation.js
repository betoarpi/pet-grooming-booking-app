const joi = require('@hapi/joi');

const idStructure = /^[0-9a-fA-F]{24}$/;
const dateStructure = /^(20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
const timeStructure = /^^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/;
const reservationIdSchema = joi.string().regex(idStructure);
const clientIdSchema = joi.string().regex(idStructure);
const petIdSchema = joi.string().regex(idStructure);
const storeIdSchema = joi.string().regex(idStructure);
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
const dateSchema = joi.string().regex(dateStructure);
const timeSchema = joi.string().regex(timeStructure);
const commentsSchema = joi.string().max(1000);
const statusSchema = joi.string().valid('reserved', 'inProcess', 'done');

const createReservationSchema = {
  client_id: clientIdSchema.required(),
  store_id: storeIdSchema.required(),
  pet_id: petIdSchema.required(),
  services: servicesSchema.required(),
  date: dateSchema.required(),
  time: timeSchema.required(),
  comments: commentsSchema.required(),
  status: statusSchema
};
const updateReservationSchema = {
  client_id: clientIdSchema,
  store_id: storeIdSchema,
  pet_id: petIdSchema,
  services: servicesSchema,
  date: dateSchema,
  time: timeSchema,
  comments: commentsSchema,
  status: statusSchema
};

module.exports = {
  reservationIdSchema,
  createReservationSchema,
  updateReservationSchema
};
