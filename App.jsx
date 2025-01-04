import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations';
import { theme } from './src/constants';
import { RefreshProvider } from './src/contexts/RefreshContext';

const App = () => {
  return(
    <RefreshProvider>
    <StatusBar backgroundColor={theme.colors.dark[950]} barStyle={'light-content'} />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </RefreshProvider>
  )
}

export default App;
