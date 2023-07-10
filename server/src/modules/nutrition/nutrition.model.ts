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
      required: true,
    },
    energ_kcal: {
      type: Number,
      required: true,
    },
    protein: {
      type: Number,
      required: true,
    },
    lipid: {
      type: Number,
      required: true,
    },
    carbohydrt: {
      type: Number,
      required: true,
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
