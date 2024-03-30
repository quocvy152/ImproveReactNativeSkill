/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, Button, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../navigation/RootParamList';
import axios from 'axios';
import {useRecoilState, useRecoilValue} from 'recoil';
import {productListState} from '../../recoil/product/productState';
import {addToCart, cartState, cartTotal} from '../../recoil/cart/cartState';
import {ProductType} from '../../feature/product/types/TypeProduct';

type CardScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'CartScreen'>;
};

const CardScreen = ({navigation}: CardScreenProps): React.JSX.Element => {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);
  const cartTotalNumber = useRecoilValue(cartTotal);

  const handleAddToCart = (product: ProductType) => {
    const cartAfterAdd = addToCart({cart, product});
    setCart(cartAfterAdd);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: '90%',
        marginLeft: '5%',
      }}>
      <Text>Info Card Screen</Text>
      <Text>List Product</Text>

      <View>
        {productList?.map(product => {
          return (
            <View style={styles.wrapProduct}>
              <Text>{product?.name}</Text>
              <Text>{product?.price}</Text>
              <Button
                title="Thêm vào giỏ"
                onPress={() => {
                  handleAddToCart(product);
                }}></Button>
            </View>
          );
        })}
      </View>

      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text>List Product In Cart</Text>
        {cart?.map(itemCart => {
          return (
            <View style={styles.wrapItemCart}>
              <Text>{itemCart?.product?.name}</Text>
              <Text>{itemCart?.quantity * itemCart?.product?.price}</Text>
              <Text>x {itemCart?.quantity}</Text>
            </View>
          );
        })}
        <Text>Tổng giá trị đơn hàng: {cartTotalNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapButton: {
    flexDirection: 'row',
  },

  wrapProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },

  wrapItemCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default CardScreen;
