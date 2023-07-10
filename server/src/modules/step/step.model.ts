import mongoose from 'mongoose';
import toJSON from '../toJSON/toJSON';
import paginate from '../paginate/paginate';
import { IStepDoc, IStepModel } from './step.interfaces';

const stepSchema = new mongoose.Schema<IStepDoc, IStepModel>(
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
stepSchema.plugin(toJSON);
stepSchema.plugin(paginate);

const Step = mongoose.model<IStepDoc, IStepModel>('Step', stepSchema);

export default Step;
