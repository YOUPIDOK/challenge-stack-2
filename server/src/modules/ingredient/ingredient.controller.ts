import httpStatus from 'http-status';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import catchAsync from '../utils/catchAsync';
import ApiError from '../errors/ApiError';
import pick from '../utils/pick';
import { IOptions } from '../paginate/paginate';
import * as ingredientService from './ingredient.service';

export const createIngredient = catchAsync(async (req: Request, res: Response) => {
  const ingredient = await ingredientService.createIngredient(req.body);
  res.status(httpStatus.CREATED).send(ingredient);
});

export const getIngredients = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['name', 'role']);
  const options: IOptions = pick(req.query, ['sortBy', 'limit', 'page', 'projectBy']);
  const result = await ingredientService.queryIngredients(filter, options);
  res.send(result);
});

export const getIngredient = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['ingredientId'] === 'string') {
    const ingredient = await ingredientService.getIngredientById(new mongoose.Types.ObjectId(req.params['ingredientId']));
    if (!ingredient) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Ingredient not found');
    }
    res.send(ingredient);
  }
});

export const updateIngredient = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['ingredientId'] === 'string') {
    const ingredient = await ingredientService.updateIngredientById(
      new mongoose.Types.ObjectId(req.params['ingredientId']),
      req.body
    );
    res.send(ingredient);
  }
});

export const deleteIngredient = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['ingredientId'] === 'string') {
    await ingredientService.deleteIngredientById(new mongoose.Types.ObjectId(req.params['ingredientId']));
    res.status(httpStatus.NO_CONTENT).send();
  }
});
