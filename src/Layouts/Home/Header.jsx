import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Logo } from '../../assets';
import { Text } from '../../ui-components';
import { s } from 'react-native-wind';

const HomeHeader = () => {
    return (
        <View style={s`w-full mb-3`}>
            <View style={s`flex-row items-center mt-6 mb-3`}>
                <Image source={Logo} style={styles.headerImage} />
                <Text size={30} weight='Bold' className='ml-2'>TodoList</Text>
            </View>
            <View style={s`flex-row items-center`}>
                <Text weight='Medium'>Today, </Text>
                <Text weight='Light'>30 Dec. 2025</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  headerImage: {
    height: 40,
    width: 40,
    resizeMode: 'center'
  },
});

export default HomeHeader