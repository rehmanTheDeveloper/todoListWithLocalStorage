import React from 'react';
import {TextInput, View} from 'react-native';
import {s} from 'react-native-wind';
import {theme} from '../constants';
import Text from './Text';

const Input = ({setValue, value, placeholder = 'Default', label="default"}) => {
  return (
    <View style={s`mt-1 mb-3`}>
        <Text className='' color={theme.colors.dark[100]} weight='Medium' size={16}>{label}</Text>
        <TextInput
            style={[
                s`w-full`,
                {
                color: theme.colors.dark[50],
                fontFamily: 'OpenSans-Regular',
                fontSize: 16,
                borderBottomColor: theme.colors.dark[300],
                borderBottomWidth: 1,
                },
            ]}
            placeholderTextColor={theme.colors.dark[300]}
            placeholder={placeholder}
            onChangeText={setValue}
            defaultValue={value}
            multiline={true}
            selectTextOnFocus={false}
        />
    </View>
  );
};

export default Input;