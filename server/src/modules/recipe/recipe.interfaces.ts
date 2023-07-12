import { Model, Document } from 'mongoose';
import { QueryResult } from '../paginate/paginate';
import { IIngredient } from './ingredient/ingredient.interfaces';
import { IStepModel } from './step/step.interfaces';

export interface IRecipe {
  title: string;
  description: string;
  image: string;
  author: string;
  publication_date: Date;
  ingredients: Array<IIngredient>;
  steps: Array<IStepModel>;
}

export interface IRecipeDoc extends IRecipe, Document {}

export interface IRecipeModel extends Model<IRecipeDoc> {
  paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
}

export type CreateRecipeBody = IRecipe;
export type UpdateRecipeBody = Partial<IRecipe>;
