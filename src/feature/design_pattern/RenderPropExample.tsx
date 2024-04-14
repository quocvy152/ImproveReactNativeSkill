import React, {useState} from 'react';
import {View, Modal, Button, Text, StyleSheet, Dimensions} from 'react-native';

import {RenderPropType, HandlePopupType} from './types/RenderPropExample';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const ModalComponent = ({
  children,
  isVisible,
  setVisible,
  typePopup,
}: RenderPropType) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={setVisible}>
      <View style={styles.wrapPopup}>
        <View
          style={[
            styles.wrapPopupContainer,
            typePopup === 'SUCCESS'
              ? styles.wrapContainer_PopupSuccess
              : styles.wrapContainer_PopupWarning,
          ]}>
          {children}
          <View style={styles.wrapContainer_Popup_Button}>
            <Button title="Đóng" onPress={setVisible} />
            <Button
              title="Tiếp tục"
              onPress={() => console.log('Continue Action')}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const RenderPropExample = ({}) => {
  const [isVisiblePopupSuccess, setIsVisiblePopupSuccess] = useState(false);
  const [isVisiblePopupWarning, setIsVisiblePopupWarning] = useState(false);

  const handlePopup = ({isVisible, setIsVisible}: HandlePopupType) => {
    console.log("🚀 ~ handlePopup ~ isVisible:", isVisible)
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      {console.log(
        '🚀 ~ RenderPropExample ~ isVisiblePopupSuccess:',
        isVisiblePopupSuccess,
      )}
      <ModalComponent
        isVisible={isVisiblePopupSuccess}
        setVisible={setIsVisiblePopupSuccess}
        typePopup={'SUCCESS'}>
        <View style={[styles.wrapContainer_PopupSuccess]}>
          <Text style={styles.titlePopup}>Đây là POPUP SUCCESS</Text>
        </View>
      </ModalComponent>

      <ModalComponent
        isVisible={isVisiblePopupWarning}
        setVisible={setIsVisiblePopupWarning}
        typePopup={'WARNING'}>
        <View style={[styles.wrapContainer_PopupWarning]}>
          <Text style={styles.titlePopup}>Đây là POPUP WARNING</Text>
        </View>
      </ModalComponent>

      <Button
        title="Open Popup Success"
        onPress={() => {
          handlePopup({
            isVisible: isVisiblePopupSuccess,
            setIsVisible: setIsVisiblePopupSuccess,
          });
        }}
      />

      <Button
        title="Open Popup Warning"
        onPress={() => {
          handlePopup({
            isVisible: isVisiblePopupWarning,
            setIsVisible: setIsVisiblePopupWarning,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapContainer_Popup: {
    width: '100%',
    height: SCREEN_HEIGHT / 3,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapContainer_PopupSuccess: {
    backgroundColor: 'green',
  },

  wrapContainer_PopupWarning: {
    backgroundColor: 'yellow',
  },

  titlePopup: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  wrapContainer_Popup_Button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapPopup: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapPopupContainer: {
    width: '80%',
    height: SCREEN_HEIGHT / 3,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default RenderPropExample;
