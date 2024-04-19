import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '9f5faf4a-3514-4022-8342-86dc6cc51f47',
};

export const sampleWithPartialData: IAuthority = {
  name: 'b4f6b0fd-a482-447a-b2da-42b49ffb16dc',
};

export const sampleWithFullData: IAuthority = {
  name: '89cba6ee-2af5-43b6-88aa-1ab62d22e285',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
