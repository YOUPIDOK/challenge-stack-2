import Joi from 'joi';
import { objectId } from '../validate/custom.validation';
import { CreateRecipeBody, UpdateRecipeBody } from './recipe.interfaces';

const createRecipeBody: Record<keyof CreateRecipeBody, any> = {
  title: Joi.string().required(),
  author: Joi.string().required(),
  publication_date: Joi.date().required(),
  ingredients: Joi.array().required(),
  steps: Joi.array().required(),
};

export const createRecipe = {
  body: Joi.object().keys(createRecipeBody),
};

export const getRecipes = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    projectBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getRecipe = {
  params: Joi.object().keys({
    recipeId: Joi.string().custom(objectId),
  }),
};

const updateRecipeBody: Record<keyof UpdateRecipeBody, any> = {
  title: Joi.string().required(),
  author: Joi.string().required(),
  publication_date: Joi.date().required(),
  ingredients: Joi.array().required(),
  steps: Joi.array().required(),
};

export const updateRecipe = {
  params: Joi.object().keys({
    recipeId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys(updateRecipeBody),
};

export const deleteRecipe = {
  params: Joi.object().keys({
    recipeId: Joi.string().custom(objectId),
  }),
};
