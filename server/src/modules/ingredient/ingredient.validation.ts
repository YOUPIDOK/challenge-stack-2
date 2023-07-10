import Joi from 'joi';
import { objectId } from '../validate/custom.validation';
import { CreateIngredientBody, UpdateIngredientBody } from './ingredient.interfaces';

const createIngredientBody: Record<keyof CreateIngredientBody, any> = {
  name: Joi.string().required(),
  quantity: Joi.number().required(),
  unit: Joi.string().required(),
};

export const createIngredient = {
  body: Joi.object().keys(createIngredientBody),
};

export const getIngredients = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    projectBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getIngredient = {
  params: Joi.object().keys({
    ingredientId: Joi.string().custom(objectId),
  }),
};

const updateIngredientBody: Record<keyof UpdateIngredientBody, any> = {
  name: Joi.string().required(),
  quantity: Joi.number().required(),
  unit: Joi.string().required(),
};

export const updateIngredient = {
  params: Joi.object().keys({
    ingredientId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys(updateIngredientBody),
};

export const deleteIngredient = {
  params: Joi.object().keys({
    ingredientId: Joi.string().custom(objectId),
  }),
};
