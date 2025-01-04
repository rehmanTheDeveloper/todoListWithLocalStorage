import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {theme} from '../constants';
import {s} from 'react-native-wind';
import {Button, Text} from '../ui-components';
import {onBoardImg} from '../assets';

const OnBoarding = ({ navigation }) => {
  return (
    <SafeAreaView style={[s`flex-1 items-center justify-evenly py-5 px-3`, styles.window]}>
      <OnBoardSection />
      <Button className={'w-full py-3.5'} onPress={() => navigation.navigate('app')}>
        <Text className='text-center' weight='SemiBold'>Get Started</Text>
      </Button>
    </SafeAreaView>
  );
};

const OnBoardSection = () => {
  return (
    <View style={s`w-full flex items-center`}>
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
    width: '100%',
    height: 350,
    resizeMode: 'contain',
    marginVertical: 40,
  },
});

export default OnBoarding;
