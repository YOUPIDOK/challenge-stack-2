import Joi from 'joi';
import { CreateStepBody, UpdateStepBody } from './step.interfaces';

export const createStepBody: Record<keyof CreateStepBody, any> = {
  title: Joi.string().required(),
  description: Joi.number().required(),
};

export const updateStepBody: Record<keyof UpdateStepBody, any> = {
  title: Joi.string(),
  description: Joi.number(),
};
