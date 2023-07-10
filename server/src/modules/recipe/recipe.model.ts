import mongoose from 'mongoose';
import toJSON from '../toJSON/toJSON';
import paginate from '../paginate/paginate';
import { IRecipeDoc, IRecipeModel } from './recipe.interfaces';
import { Ingredient } from '../ingredient';
import { Step } from '../step';

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
      type: [Ingredient],
      required: true,
    },
    steps: {
      type: [Step],
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
