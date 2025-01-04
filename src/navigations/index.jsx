import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, OnBoarding, CreateTask, Tasks, EditTask } from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../constants';

const Stack = createStackNavigator();

const RootNavigator = () => {
    const [InitialRouteName, setInitialRouteName] = useState(null);

    const checkOnBoard = async () => {
        try {
            const OnBoard = await AsyncStorage.getItem('onBoard');
            console.log(OnBoard);
            if (OnBoard) {
                setInitialRouteName('app');
            } else {
                setInitialRouteName('onBoard');
            }
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        checkOnBoard();
    }, [])

    if (InitialRouteName === null) {
        return;
    }

    return (
        <Stack.Navigator initialRouteName={InitialRouteName} screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: theme.colors.dark[950]
            }
        }}>
            <Stack.Screen name='onBoard' component={OnBoarding} />
            <Stack.Screen name='app' component={MainStackNavigator} />
        </Stack.Navigator>
    )
}

const MainStack = createStackNavigator();
const MainStackNavigator = () => {
    return (
        <MainStack.Navigator initialRouteName='home' screenOptions={{
            headerShown: false
        }}>
            <MainStack.Screen name='home' component={Home} />
            <MainStack.Screen name='createTask' component={CreateTask} />
            <MainStack.Screen name='tasks' component={Tasks} />
            <MainStack.Screen name='editTask' component={EditTask} />
        </MainStack.Navigator>
    )
}

export default RootNavigator