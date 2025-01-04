import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {theme} from '../constants';
import {s} from 'react-native-wind';
import {Button, Text} from '../ui-components';
import {onBoardImg} from '../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoarding = ({ navigation }) => {

  const onBoardStatus = async () => {
    try {
      await AsyncStorage.setItem('onBoard', 'true');
      navigation.navigate('app');
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <SafeAreaView style={[s`flex-1 items-center justify-evenly py-5 px-3`, styles.window]}>
      <OnBoardSection />
      <Button className={'w-9/12 py-3'} onPress={onBoardStatus}>
        <Text className='text-center' weight='Medium'>Get Started</Text>
      </Button>
    </SafeAreaView>
  );
};

const OnBoardSection = () => {
  return (
    <View style={s`w-full flex items-center px-8 mt-10`}>
      <Image source={onBoardImg} style={styles.onBoardSectionImg} />
      <Text weight="SemiBold" className="text-center mb-3" size={20}>
        Manage Your Tasks very Easily!
      </Text>
      <Text size={16} weight="Light" className="text-center" color={theme.colors.dark[200]}>
        Plan your daily tasks and manage them all at one with speical features &
        This smarl tool is designed to help you better manage your tasks.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    backgroundColor: theme.colors.dark[950],
  },
  onBoardSectionImg: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default OnBoarding;
