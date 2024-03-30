/* eslint-disable @typescript-eslint/no-shadow */
import {atom} from 'recoil';

export const productListState = atom({
  key: 'productList',
  default: [
    {id: 1, name: 'Nike Tiempo', price: 1500000},
    {id: 2, name: 'Addidas XSpeed Flow', price: 2500000},
    {id: 3, name: 'Pulma Ultra', price: 900000},
  ],
});
