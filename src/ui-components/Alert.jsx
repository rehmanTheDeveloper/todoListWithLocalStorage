import React from 'react';
import {View} from 'react-native';
import Text from './Text';
import {theme} from '../constants';
import { s } from 'react-native-wind';

const Alert = ({
  text,
  backgroundColor = theme.colors.dark[900],
  borderColor = theme.colors.dark[400],
}) => {
  return (
    <View
      style={[
        s`w-full p-3 rounded-xl my-3`,
        {
          backgroundColor: backgroundColor,
          borderWidth: 1,
          borderColor: borderColor,
        },
      ]}>
      <Text size={16}>{text}</Text>
    </View>
  );
};

export default Alert;
