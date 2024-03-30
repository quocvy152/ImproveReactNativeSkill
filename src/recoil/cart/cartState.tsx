import {atom, selector} from 'recoil';
import {
  AddToCartTypeParams,
  CartItemType,
} from '../../feature/cart/types/CartType';

const defaultValueCart: CartItemType[] = [];

export const cartState = atom({
  key: 'cart',
  default: defaultValueCart,
});

export const cartTotal = selector({
  key: 'cartTotal',
  get: ({get}) => {
    const cart = get(cartState);

    return cart.reduce(
      (total, currentItemCart) =>
        total + currentItemCart.quantity * currentItemCart.product.price,
      0,
    );
  },
});

export const addToCart = ({cart, product}: AddToCartTypeParams) => {
  let newCart = [...cart];

  const indexProductInCart = newCart.findIndex(
    cart => cart?.product?.id === product?.id,
  );

  if (indexProductInCart >= 0) {
    newCart[indexProductInCart] = {
      product,
      quantity: newCart[indexProductInCart]?.quantity + 1,
    };
  } else {
    const newItemCart = {
      product,
      quantity: 1,
    };
    newCart = [...newCart, newItemCart];
  }

  return newCart;
};
