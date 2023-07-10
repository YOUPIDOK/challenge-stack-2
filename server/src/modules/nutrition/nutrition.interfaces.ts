import { Model, Document } from 'mongoose';

export interface INutrition {
  name: string;
  water: number;
  energ_kcal: number;
  protein: number;
  lipid: number;
  carbohydrt: number;
}

export interface INutritionDoc extends INutrition, Document {}

export interface INutritionModel extends Model<INutritionDoc> {}

export type CreateNutritionBody = INutrition;
export type UpdateNutritionBody = Partial<INutrition>;
