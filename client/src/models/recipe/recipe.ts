import { IIngredient } from "./ingredient/ingredient";
import { IStep } from "./step/step";

export interface IRecipe {
  id: string;
  title: string;
  description?: string;
  image: string;
  author: string;
  publication_date: Date;
  ingredients: IIngredient[];
  steps: IStep[];
}