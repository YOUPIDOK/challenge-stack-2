import { Model, Document } from 'mongoose';
import { QueryResult } from '../paginate/paginate';
import { IIngredientModel } from '../ingredient/ingredient.interfaces';
import { IStepModel } from '../step/step.interfaces';

export interface IRecipe {
  title: string;
  author: string;
  publication_date: Date;
  ingredients: Array<IIngredientModel>;
  steps: Array<IStepModel>;
}

export interface IRecipeDoc extends IRecipe, Document {}

export interface IRecipeModel extends Model<IRecipeDoc> {
  paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
}

export type CreateRecipeBody = IRecipe;
export type UpdateRecipeBody = Partial<IRecipe>;
