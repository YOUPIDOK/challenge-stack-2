import Joi from 'joi';
import { objectId } from '../validate/custom.validation';
import { CreateStepBody, UpdateStepBody } from './step.interfaces';

const createStepBody: Record<keyof CreateStepBody, any> = {
  name: Joi.string().required(),
  quantity: Joi.number().required(),
  unit: Joi.string().required(),
};

export const createStep = {
  body: Joi.object().keys(createStepBody),
};

export const getSteps = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    projectBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getStep = {
  params: Joi.object().keys({
    stepId: Joi.string().custom(objectId),
  }),
};

const updateStepBody: Record<keyof UpdateStepBody, any> = {
  name: Joi.string().required(),
  quantity: Joi.number().required(),
  unit: Joi.string().required(),
};

export const updateStep = {
  params: Joi.object().keys({
    stepId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys(updateStepBody),
};

export const deleteStep = {
  params: Joi.object().keys({
    stepId: Joi.string().custom(objectId),
  }),
};
