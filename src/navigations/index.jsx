import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, OnBoarding, CreateTask, Tasks, EditTask } from '../screens';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='app' screenOptions={{
            headerShown: false
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