import React from 'react';
import {Alert, Dimensions, Modal as RNModal, StyleSheet, View} from 'react-native';
import {s} from 'react-native-wind';
import Button from './Button';
import Text from './Text';

const Modal = ({
  modalVisible = false,
  setModalVisible = () => {},
  onSuccess = () => {},
  children = null,
  footer = true,
  animationType = "fade" // fade or slide or none
}) => {
  const styles = StyleSheet.create({
    centeredView: {
      justifyContent: animationType == 'slide' ? 'flex-end' : 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(23,23,23,0.5)'
    },
    modalView: [{
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      maxHeight: animationType == 'slide' ? Dimensions.get('window').height * 0.8 : 'fit-content',
    }, animationType == 'slide' ? {width: Dimensions.get('window').width} : {}]
  });

  return (
    <View style={styles.centeredView}>
      <RNModal
       style={s`relative w-full`}
        animationType={animationType}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={[styles.centeredView, modalVisible ? {flex: 1} : {flex: 0} ]}>
          <View
            style={[
              s`bg-white rounded-xl p-4 w-11/12 max-h-8/12`,
              styles.modalView,
            ]}>
            {children}
            {footer ? (
              <View style={s`w-full flex-row items-center justify-between`}>
              <Button className={'px-3 py-2 rounded-lg'} onPress={() => setModalVisible(prev => !prev)}>
                <Text size={16} weight='Medium'>Cancel</Text>
              </Button>
              <Button className={'px-3 py-2 rounded-lg'} onPress={onSuccess}>
                <Text size={16} weight='Medium'>Done</Text>
              </Button>
              </View>
            ) : null}
          </View>
        </View>
      </RNModal>
    </View>
  );
};

export default Modal;
