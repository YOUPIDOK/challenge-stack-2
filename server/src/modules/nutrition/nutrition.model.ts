import mongoose from 'mongoose';
import toJSON from '../toJSON/toJSON';
import { INutritionDoc, INutritionModel } from './nutrition.interfaces';

const nutritionSchema = new mongoose.Schema<INutritionDoc, INutritionModel>(
  {
    name: {
      type: String,
      required: true,
    },
    water: {
      type: Number,
      default: null,
    },
    energ_kcal: {
      type: Number,
      default: null,
    },
    protein: {
      type: Number,
      default: null,
    },
    lipid: {
      type: Number,
      default: null,
    },
    carbohydrt: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

nutritionSchema.index({ name: 'text' });

// add plugin that converts mongoose to json
nutritionSchema.plugin(toJSON);

const Nutrition = mongoose.model<INutritionDoc, INutritionModel>('Nutrition', nutritionSchema);

export default Nutrition;
