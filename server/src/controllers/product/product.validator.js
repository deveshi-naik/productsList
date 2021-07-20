const Joi = require('joi');

export const add = {
  body: {
    name: Joi.string().required(),
    category: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    discount: Joi.number(),
    netPrice: Joi.number().required(),
    description: Joi.string(),
  },
};

export const update = {
  body: {
    id: Joi.string().required(),
    name: Joi.string(),
    category: Joi.string(),
    image: Joi.string(),
    price: Joi.number(),
    discount: Joi.number(),
    netPrice: Joi.number(),
    description: Joi.string(),
  },
};

export const remove = {
  body: {
    id: Joi.string().required(),
  },
};
