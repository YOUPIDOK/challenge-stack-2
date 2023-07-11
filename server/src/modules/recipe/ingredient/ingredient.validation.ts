import Joi from 'joi';
import { CreateIngredientBody, UpdateIngredientBody } from './ingredient.interfaces';
import { createNutritionBody } from '../../nutrition/nutrition.validation';

export const createIngredientBody: Record<keyof CreateIngredientBody, any> = {
  name: Joi.object().keys(createNutritionBody).required(),
  quantity: Joi.number().required(),
};

export const updateIngredientBody: Record<keyof UpdateIngredientBody, any> = {
  name: Joi.string(),
  quantity: Joi.number(),
};
