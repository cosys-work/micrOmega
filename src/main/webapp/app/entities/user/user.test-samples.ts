import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: '735a3ef6-86a6-4af4-b09c-8f7b19e96e15',
  login: 'lx6i@pOhdc\\;P',
};

export const sampleWithPartialData: IUser = {
  id: '2f6e3453-c44f-452f-8fe5-7b9b125b52c3',
  login: 'Nacb81',
};

export const sampleWithFullData: IUser = {
  id: '070b6acd-1bdb-452f-b3aa-3d7863c5373d',
  login: '|LvF@u\\[HVK\\bO\\x2VEWdL',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
