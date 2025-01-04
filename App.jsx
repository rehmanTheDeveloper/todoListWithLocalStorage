import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations';
import { theme } from './src/constants';

const App = () => {
  return(
    <>
    <StatusBar backgroundColor={theme.colors.dark[950]} barStyle={'light-content'} />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  )
}

export default App;
