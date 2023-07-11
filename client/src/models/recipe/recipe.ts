import { IIngredient, IIngredientInput } from "./ingredient/ingredient";
import { IStep, IStepInput } from "./step/step";

export interface IRecipe {
  id: string;
  title: string;
  description?: string;
  author: string;
  publication_date: Date;
  ingredients: IIngredient[];
  steps: IStep[];
}

export interface IRecipeInput extends Omit<IRecipe, "id"> {
  ingredients: IIngredientInput[];
  steps: IStepInput[];
}
