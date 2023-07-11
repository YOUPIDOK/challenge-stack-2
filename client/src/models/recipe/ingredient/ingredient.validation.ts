import Joi from 'joi';
import { CreateIngredientBody, UpdateIngredientBody } from './ingredient.interfaces';

export const createIngredientBody: Record<keyof CreateIngredientBody, any> = {
  name: Joi.string().required(),
  quantity: Joi.number().required(),
  unit: Joi.string().required(),
};

export const updateIngredientBody: Record<keyof UpdateIngredientBody, any> = {
  name: Joi.string(),
  quantity: Joi.number(),
  unit: Joi.string(),
};
