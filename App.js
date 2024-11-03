import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { PomodoroProvider } from './src/context/PomodoroContext';

const App = () => {
  return (
    <PomodoroProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PomodoroProvider>
  );
};

export default App;
