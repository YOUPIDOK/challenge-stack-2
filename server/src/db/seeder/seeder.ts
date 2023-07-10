import { logger } from '../../modules/logger';
import nutritionSeeder from './nutrition';

const seed = async () => {
  await nutritionSeeder()
    .then((completed) => {
      logger.debug('Successfuly completed seeding nutrition...');
      Promise.resolve(completed);
    })
    .catch((error) => {
      logger.error('Failed seeding nutrition...');
      Promise.reject(error);
    });
};

export default { seed };
