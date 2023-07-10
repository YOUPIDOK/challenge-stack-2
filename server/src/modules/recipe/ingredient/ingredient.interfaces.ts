import { Model, Document } from 'mongoose';
import { QueryResult } from '../../paginate/paginate';

export interface IIngredient {
  name: string;
  quantity: number;
  unit: string;
}

export interface IIngredientDoc extends IIngredient, Document {}

export interface IIngredientModel extends Model<IIngredientDoc> {
  paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
}

export type CreateIngredientBody = IIngredient;
export type UpdateIngredientBody = Partial<IIngredient>;
