/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useRef} from 'react';
import {ScrollView, View, Text, Button, Animated, Easing} from 'react-native';

const AnimatedScreen = () => {
  const animatedLeftToRight = useRef(new Animated.Value(100)).current;
  const animatedXToY = useRef(new Animated.ValueXY({x: 100, y: 50})).current;

  useEffect(() => {
    Animated.timing(animatedLeftToRight, {
      toValue: 250,
      duration: 2000,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();

    Animated.timing(animatedXToY, {
      toValue: {
        x: 200,
        y: 250,
      },
      duration: 2000,
      easing: Easing.bounce, // bounce | easing
      useNativeDriver: false,
    }).start();
  }, [animatedLeftToRight, animatedXToY]);

  return (
    <View>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          marginLeft: animatedLeftToRight,
          marginTop: 50,
          backgroundColor: 'pink',
        }}></Animated.View>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          marginLeft: animatedXToY.x,
          marginTop: animatedXToY.y,
          backgroundColor: 'blue',
        }}></Animated.View>
    </View>
  );
};

export default AnimatedScreen;
