import httpStatus from 'http-status';
import mongoose from 'mongoose';
import Step from './step.model';
import ApiError from '../errors/ApiError';
import { IOptions, QueryResult } from '../paginate/paginate';
import { CreateStepBody, IStepDoc, UpdateStepBody } from './step.interfaces';

/**
 * Create a step
 * @param {NewCreatedStep} stepBody
 * @returns {Promise<IStepDoc>}
 */
export const createStep = async (stepBody: CreateStepBody): Promise<IStepDoc> => {
  return Step.create(stepBody);
};

/**
 * Query for steps
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
export const querySteps = async (filter: Record<string, any>, options: IOptions): Promise<QueryResult> => {
  const steps = await Step.paginate(filter, options);
  return steps;
};

/**
 * Get step by id
 * @param {mongoose.Types.ObjectId} id
 * @returns {Promise<IStepDoc | null>}
 */
export const getStepById = async (id: mongoose.Types.ObjectId): Promise<IStepDoc | null> => Step.findById(id);

/**
 * Update step by id
 * @param {mongoose.Types.ObjectId} stepId
 * @param {UpdateStepBody} updateBody
 * @returns {Promise<IStepDoc | null>}
 */
export const updateStepById = async (
  stepId: mongoose.Types.ObjectId,
  updateBody: UpdateStepBody
): Promise<IStepDoc | null> => {
  const step = await getStepById(stepId);
  if (!step) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Step not found');
  }
  Object.assign(step, updateBody);
  await step.save();
  return step;
};

/**
 * Delete step by id
 * @param {mongoose.Types.ObjectId} stepId
 * @returns {Promise<IStepDoc | null>}
 */
export const deleteStepById = async (stepId: mongoose.Types.ObjectId): Promise<IStepDoc | null> => {
  const step = await getStepById(stepId);
  if (!step) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Step not found');
  }
  await step.deleteOne();
  return step;
};
