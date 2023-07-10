import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import ApiError from '../errors/ApiError';
import * as nutritionService from './nutrition.service';

export const getNutritions = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['search'] === 'string') {
    const nutrition = await nutritionService.queryNutritions(req.params['search']);
    if (!nutrition) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Nutrition not found');
    }
    res.send(nutrition);
  }
});

export default { getNutritions };
