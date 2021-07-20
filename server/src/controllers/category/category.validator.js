const Joi = require('joi');

export const add = {
  body: {
    name: Joi.string().required(),
  },
};

export const update = {
  body: {
    id: Joi.string().required(),
    name: Joi.string().required(),
  },
};

export const remove = {
  body: {
    id: Joi.string().required(),
  },
};
