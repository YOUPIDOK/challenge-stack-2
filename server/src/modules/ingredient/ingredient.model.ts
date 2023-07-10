import mongoose from 'mongoose';
import toJSON from '../toJSON/toJSON';
import paginate from '../paginate/paginate';
import { IIngredientDoc, IIngredientModel } from './ingredient.interfaces';

const ingredientSchema = new mongoose.Schema<IIngredientDoc, IIngredientModel>(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
ingredientSchema.plugin(toJSON);
ingredientSchema.plugin(paginate);

const Ingredient = mongoose.model<IIngredientDoc, IIngredientModel>('Ingredient', ingredientSchema);

export default Ingredient;
