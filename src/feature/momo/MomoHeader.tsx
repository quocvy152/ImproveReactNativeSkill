/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
  Animated,
  Easing,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const MomoHeader = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}></StatusBar>
      <SafeAreaView>
        <View style={styles.headerFixed}></View>
      </SafeAreaView>
      <SafeAreaView style={styles.header}>
        <View style={styles.paddingHeader}></View>
        <View style={styles.contentHeader}></View>
      </SafeAreaView>
      <ScrollView>
        <View style={styles.paddingScrollView}></View>
        <View style={styles.scrollViewContent}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width: '100%',
    backgroundColor: '#AF0C6E',
    position: 'absolute',
  },

  headerFixed: {
    height: 40,
  },

  scrollViewContent: {
    height: SCREEN_HEIGHT * 2,
    backgroundColor: 'white',
  },

  paddingScrollView: {
    height: 96,
  },

  paddingHeader: {
    height: 40,
  },

  contentHeader: {
    height: 96,
  },
});

export default MomoHeader;
