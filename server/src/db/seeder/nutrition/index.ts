import { readFileSync } from 'fs';
import { Nutrition } from '../../../modules/nutrition';

const nutritionSeeder = async () => {
  const fileContent = readFileSync('./nutrition.json', 'utf8');
  const nutrition = JSON.parse(fileContent);

  await Nutrition.deleteMany({});
  await Nutrition.insertMany(nutrition);
};

export default nutritionSeeder;
