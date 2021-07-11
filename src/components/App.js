import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Tabs } from '../routes/Tabs';


const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App;