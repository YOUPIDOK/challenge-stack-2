import httpStatus from 'http-status';
import mongoose from 'mongoose';
import Ingredient from './ingredient.model';
import ApiError from '../errors/ApiError';
import { IOptions, QueryResult } from '../paginate/paginate';
import { CreateIngredientBody, IIngredientDoc, UpdateIngredientBody } from './ingredient.interfaces';

/**
 * Create a ingredient
 * @param {NewCreatedIngredient} ingredientBody
 * @returns {Promise<IIngredientDoc>}
 */
export const createIngredient = async (ingredientBody: CreateIngredientBody): Promise<IIngredientDoc> => {
  return Ingredient.create(ingredientBody);
};

/**
 * Query for ingredients
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
export const queryIngredients = async (filter: Record<string, any>, options: IOptions): Promise<QueryResult> => {
  const ingredients = await Ingredient.paginate(filter, options);
  return ingredients;
};

/**
 * Get ingredient by id
 * @param {mongoose.Types.ObjectId} id
 * @returns {Promise<IIngredientDoc | null>}
 */
export const getIngredientById = async (id: mongoose.Types.ObjectId): Promise<IIngredientDoc | null> =>
  Ingredient.findById(id);

/**
 * Update ingredient by id
 * @param {mongoose.Types.ObjectId} ingredientId
 * @param {UpdateIngredientBody} updateBody
 * @returns {Promise<IIngredientDoc | null>}
 */
export const updateIngredientById = async (
  ingredientId: mongoose.Types.ObjectId,
  updateBody: UpdateIngredientBody
): Promise<IIngredientDoc | null> => {
  const ingredient = await getIngredientById(ingredientId);
  if (!ingredient) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Ingredient not found');
  }
  Object.assign(ingredient, updateBody);
  await ingredient.save();
  return ingredient;
};

/**
 * Delete ingredient by id
 * @param {mongoose.Types.ObjectId} ingredientId
 * @returns {Promise<IIngredientDoc | null>}
 */
export const deleteIngredientById = async (ingredientId: mongoose.Types.ObjectId): Promise<IIngredientDoc | null> => {
  const ingredient = await getIngredientById(ingredientId);
  if (!ingredient) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Ingredient not found');
  }
  await ingredient.deleteOne();
  return ingredient;
};
