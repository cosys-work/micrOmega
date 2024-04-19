import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b9beae06-47a2-48d1-b53d-b78f211b05bc',
};

export const sampleWithPartialData: IAuthority = {
  name: '830fa550-1623-47a1-8440-821069200fd0',
};

export const sampleWithFullData: IAuthority = {
  name: '2bf9c438-a450-42b4-a2c3-4d3e0105c28c',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
