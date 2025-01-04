import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { s } from 'react-native-wind';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { theme } from '../../constants';
import { Text } from '../../ui-components';

const CreateTaskHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={s`w-full flex-row items-center p-3`}>
            <TouchableOpacity onPress={() => navigation.pop()} style={[s`p-2 rounded-full`, {backgroundColor: theme.colors.primary[600]}]}>
                <ChevronLeftIcon size={24} color={theme.colors.dark[50]} />
            </TouchableOpacity>
            <Text className='ml-3' weight='SemiBold' size={22}>Create new Task</Text>
        </View>
    );
}

export default CreateTaskHeader