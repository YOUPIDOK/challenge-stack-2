import httpStatus from 'http-status';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import catchAsync from '../utils/catchAsync';
import ApiError from '../errors/ApiError';
import pick from '../utils/pick';
import { IOptions } from '../paginate/paginate';
import * as stepService from './step.service';

export const createStep = catchAsync(async (req: Request, res: Response) => {
  const step = await stepService.createStep(req.body);
  res.status(httpStatus.CREATED).send(step);
});

export const getSteps = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['name', 'role']);
  const options: IOptions = pick(req.query, ['sortBy', 'limit', 'page', 'projectBy']);
  const result = await stepService.querySteps(filter, options);
  res.send(result);
});

export const getStep = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['stepId'] === 'string') {
    const step = await stepService.getStepById(new mongoose.Types.ObjectId(req.params['stepId']));
    if (!step) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Step not found');
    }
    res.send(step);
  }
});

export const updateStep = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['stepId'] === 'string') {
    const step = await stepService.updateStepById(new mongoose.Types.ObjectId(req.params['stepId']), req.body);
    res.send(step);
  }
});

export const deleteStep = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['stepId'] === 'string') {
    await stepService.deleteStepById(new mongoose.Types.ObjectId(req.params['stepId']));
    res.status(httpStatus.NO_CONTENT).send();
  }
});
