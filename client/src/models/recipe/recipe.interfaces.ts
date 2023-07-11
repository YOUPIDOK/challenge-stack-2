import { IIngredientModel } from './ingredient/ingredient.interfaces';
import { IStepModel } from './step/step.interfaces';

export interface IRecipe {
  title: string;
  author: string;
  publication_date: Date;
  ingredients: Array<IIngredientModel>;
  steps: Array<IStepModel>;
}
