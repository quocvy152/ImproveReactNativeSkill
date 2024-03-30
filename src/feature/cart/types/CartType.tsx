import {ProductType} from '../../product/types/TypeProduct';

export type CartItemType = {
  product: ProductType;
  quantity: number;
};

export type AddToCartTypeParams = {
  cart: CartItemType[];
  product: ProductType;
};
