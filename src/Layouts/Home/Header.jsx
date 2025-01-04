import React, { useState } from 'react';
import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Logo } from '../../assets';
import { Text } from '../../ui-components';
import { s } from 'react-native-wind';
import moment from 'moment';
import { ArchiveBoxXMarkIcon } from 'react-native-heroicons/solid';
import { theme } from '../../constants';
import { useTask } from '../../hooks';

const HomeHeader = () => {
    const {removeAllTasks} = useTask();
    return (
        <View style={s`w-full flex-row items-center justify-between mb-3 px-3.5`}>
            <View style={s`w-9/12`}>
                <View style={s`flex-row items-center mt-6 mb-3`}>
                    <Image source={Logo} style={styles.headerImage} />
                    <Text size={30} weight='Bold' className='ml-2'>TodoList</Text>
                </View>
                <View style={s`flex-row items-center`}>
                    <TimeSection />
                </View>
            </View>
            <TouchableOpacity style={s`items-center`} onPress={() => Alert.alert("Clear All", "Are you Sure to Clear all Tasks ?", [
                {
                    text: "Cancel",
                    onPress: () => {}
                },
                {
                    text: "Clear All",
                    onPress: removeAllTasks
                }
            ])}>
                <ArchiveBoxXMarkIcon size={30} color={theme.colors.primary[500]} />
                <Text size={14} weight='Light'>Clear All</Text>
            </TouchableOpacity>
        </View>
    )
}

const TimeSection = () => {
    const [Date, setDate] = useState(moment());
    return <>
        <Text weight='Medium'>Today, </Text>
        <Text weight='Light'>{Date.format('DD MMM. YYYY')}</Text>
    </>;
}

const styles = StyleSheet.create({
  headerImage: {
    height: 40,
    width: 40,
    resizeMode: 'center'
  },
});

export default HomeHeader