import { INutrition } from "@/models/nutrition/nutrition";

export interface IIngredient {
  id: string;
  nutrition: INutrition;
  quantity: number;
}

export interface IIngredientInput extends Omit<IIngredient, "id"> {}
