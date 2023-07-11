import httpStatus from 'http-status';
import mongoose from 'mongoose';
import Recipe from './recipe.model';
import ApiError from '../errors/ApiError';
import { IOptions, QueryResult } from '../paginate/paginate';
import { CreateRecipeBody, UpdateRecipeBody, IRecipeDoc } from './recipe.interfaces';

/**
 * Create a recipe
 * @param {CreateRecipeBody} recipeBody
 * @returns {Promise<IRecipeDoc>}
 */
export const createRecipe = async (recipeBody: CreateRecipeBody): Promise<IRecipeDoc> => {
  return Recipe.create(recipeBody);
};

/**
 * Query for recipes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
export const queryRecipes = async (filter: Record<string, any>, options: IOptions): Promise<QueryResult> => {
  const recipes = await Recipe.paginate(filter, options);
  return recipes;
};

/**
 * Get recipe by id
 * @param {mongoose.Types.ObjectId} id
 * @returns {Promise<IRecipeDoc | null>}
 */
export const getRecipeById = async (id: mongoose.Types.ObjectId): Promise<IRecipeDoc | null> => Recipe.findById(id);

/**
 * Update recipe by id
 * @param {mongoose.Types.ObjectId} recipeId
 * @param {UpdateRecipeBody} updateBody
 * @returns {Promise<IRecipeDoc | null>}
 */
export const updateRecipeById = async (
  recipeId: mongoose.Types.ObjectId,
  updateBody: UpdateRecipeBody
): Promise<IRecipeDoc | null> => {
  const recipe = await getRecipeById(recipeId);
  if (!recipe) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recipe not found');
  }
  Object.assign(recipe, updateBody);
  await recipe.save();
  return recipe;
};

/**
 * Delete recipe by id
 * @param {mongoose.Types.ObjectId} recipeId
 * @returns {Promise<IRecipeDoc | null>}
 */
export const deleteRecipeById = async (recipeId: mongoose.Types.ObjectId): Promise<IRecipeDoc | null> => {
  const recipe = await getRecipeById(recipeId);
  if (!recipe) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recipe not found');
  }
  await recipe.deleteOne();
  return recipe;
};
