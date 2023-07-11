import Joi from 'joi';

export const getNutritions = {
  query: Joi.object().keys({
    search: Joi.string().default(''),
  }),
};

export default { getNutritions };
