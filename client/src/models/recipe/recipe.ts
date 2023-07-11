import { IIngredient } from "./ingredient/ingredient";
import { IStep } from "./step/step";

export interface IRecipe {
  id: string;
  title: string;
  description?: string;
  author: string;
  publication_date: Date;
  ingredients: IIngredient[];
  steps: IStep[];
}