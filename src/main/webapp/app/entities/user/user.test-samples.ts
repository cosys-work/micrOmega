import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 3950,
  login: '5x7',
};

export const sampleWithPartialData: IUser = {
  id: 27710,
  login: 'rG4_j',
};

export const sampleWithFullData: IUser = {
  id: 26139,
  login: 'VkB@Li82\\$sz',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
