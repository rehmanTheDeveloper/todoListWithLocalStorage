import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { s } from 'react-native-wind';

const Badge = ({
    className = 'bg-green-500',
    style = {},
    children
}) => {
    return (
        <View style={[s`rounded-full py-2 px-3 bg-red-500 ${className}`, style]}>
            <Text size={12} weight='SemiBold' className='text-center'>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Badge