import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Tabs } from '../routes/Tabs';
import { AppStack } from '../routes/AppStack';


const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}

export default App;