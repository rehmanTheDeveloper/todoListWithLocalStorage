import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { theme } from '../constants';
import { s } from 'react-native-wind';

const Text = ({
    size = 18,
    color = theme.colors.dark[50],
    weight = "Regular",
    style = {},
    className = "",
    children
}) => {
    const fontFamily = "OpenSans-"+weight;
    const styles = StyleSheet.create({
        text: {
            fontFamily: fontFamily,
            fontSize: size,
            color: color
        }
    })
    return (
        <RNText style={[styles.text, s`${className}`, style]}>{children}</RNText>
    )
}

export default Text