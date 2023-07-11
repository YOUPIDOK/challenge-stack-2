import mongoose from 'mongoose';
import toJSON from '../toJSON/toJSON';
import paginate from '../paginate/paginate';
import { IRecipeDoc, IRecipeModel } from './recipe.interfaces';
import { ingredientSchema } from './ingredient/ingredient.model';
import { stepSchema } from './step/step.model';

const recipeSchema = new mongoose.Schema<IRecipeDoc, IRecipeModel>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      ref: 'User',
      required: true,
    },
    publication_date: {
      type: Date,
      required: true,
    },
    ingredients: {
      type: [ingredientSchema],
      required: true,
    },
    steps: {
      type: [stepSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
recipeSchema.plugin(toJSON);
recipeSchema.plugin(paginate);

const Recipe = mongoose.model<IRecipeDoc, IRecipeModel>('Recipe', recipeSchema);

export default Recipe;