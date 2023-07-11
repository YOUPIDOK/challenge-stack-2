export interface IStep {
  id: string;
  title: string;
  description: string;
}

export interface IStepInput extends Omit<IStep, "id"> {}