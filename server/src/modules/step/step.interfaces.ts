import { Model, Document } from 'mongoose';
import { QueryResult } from '../paginate/paginate';

export interface IStep {
  name: string;
  quantity: number;
  unit: string;
}

export interface IStepDoc extends IStep, Document {}

export interface IStepModel extends Model<IStepDoc> {
  paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
}

export type CreateStepBody = IStep;
export type UpdateStepBody = Partial<IStep>;
