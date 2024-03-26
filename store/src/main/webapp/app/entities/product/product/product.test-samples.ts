import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 7642,
  name: 'sneer',
  price: 24316.9,
};

export const sampleWithPartialData: IProduct = {
  id: 10627,
  name: 'curvy delegate upside-down',
  price: 21286.88,
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithFullData: IProduct = {
  id: 2717,
  name: 'plonk brick svelte',
  description: 'notwithstanding',
  price: 23040.47,
  sise: 'L',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewProduct = {
  name: 'array',
  price: 1371.13,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
