import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { AppWrapped } from '../routes/AppWrapped';
import { AppStack } from '../routes/AppStack';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>

      {/*<AppWrapped />*/}

    </Provider>
  )
}

export default App;