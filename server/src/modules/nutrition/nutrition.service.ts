import httpStatus from 'http-status';
import mongoose from 'mongoose';
import Nutrition from './nutrition.model';
import ApiError from '../errors/ApiError';
import { CreateNutritionBody, UpdateNutritionBody, INutritionDoc } from './nutrition.interfaces';

/**
 * Create a nutrition
 * @param {CreateNutritionBody} nutritionBody
 * @returns {Promise<INutritionDoc>}
 */
export const createNutrition = async (nutritionBody: CreateNutritionBody): Promise<INutritionDoc> => {
  return Nutrition.create(nutritionBody);
};

/**
 * Query for nutritions
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
export const queryNutritions = async (search: string): Promise<INutritionDoc[] | null> => {
  const nutritions = await Nutrition.find({ $text: { $search: search } })
    .skip(20)
    .limit(10)
    .exec();
  return nutritions;
};

/**
 * Get nutrition by id
 * @param {mongoose.Types.ObjectId} id
 * @returns {Promise<INutritionDoc | null>}
 */
export const getNutritionById = async (id: mongoose.Types.ObjectId): Promise<INutritionDoc | null> => Nutrition.findById(id);

/**
 * Update nutrition by id
 * @param {mongoose.Types.ObjectId} nutritionId
 * @param {UpdateNutritionBody} updateBody
 * @returns {Promise<INutritionDoc | null>}
 */
export const updateNutritionById = async (
  nutritionId: mongoose.Types.ObjectId,
  updateBody: UpdateNutritionBody
): Promise<INutritionDoc | null> => {
  const nutrition = await getNutritionById(nutritionId);
  if (!nutrition) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Nutrition not found');
  }
  Object.assign(nutrition, updateBody);
  await nutrition.save();
  return nutrition;
};

/**
 * Delete nutrition by id
 * @param {mongoose.Types.ObjectId} nutritionId
 * @returns {Promise<INutritionDoc | null>}
 */
export const deleteNutritionById = async (nutritionId: mongoose.Types.ObjectId): Promise<INutritionDoc | null> => {
  const nutrition = await getNutritionById(nutritionId);
  if (!nutrition) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Nutrition not found');
  }
  await nutrition.deleteOne();
  return nutrition;
};
