import httpStatus from 'http-status';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import catchAsync from '../utils/catchAsync';
import ApiError from '../errors/ApiError';
import pick from '../utils/pick';
import { IOptions } from '../paginate/paginate';
import * as recipeService from './recipe.service';

export const createRecipe = catchAsync(async (req: Request, res: Response) => {
  const recipe = await recipeService.createRecipe(req.body);
  res.status(httpStatus.CREATED).send(recipe);
});

export const getRecipes = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['name', 'role']);
  const options: IOptions = pick(req.query, ['sortBy', 'limit', 'page', 'projectBy']);
  const result = await recipeService.queryRecipes(filter, options);
  res.send(result);
});

export const getRecipe = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['recipeId'] === 'string') {
    const recipe = await recipeService.getRecipeById(new mongoose.Types.ObjectId(req.params['recipeId']));
    if (!recipe) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Recipe not found');
    }
    res.send(recipe);
  }
});

export const updateRecipe = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['recipeId'] === 'string') {
    const recipe = await recipeService.updateRecipeById(new mongoose.Types.ObjectId(req.params['recipeId']), req.body);
    res.send(recipe);
  }
});

export const deleteRecipe = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['recipeId'] === 'string') {
    await recipeService.deleteRecipeById(new mongoose.Types.ObjectId(req.params['recipeId']));
    res.status(httpStatus.NO_CONTENT).send();
  }
});