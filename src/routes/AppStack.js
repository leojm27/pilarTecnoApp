import React, { Component, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store';
import CreateStack from './CreateStack';

const Stack = createStackNavigator();

export const AppStack = (props) => {

  const dispatch = useDispatch()
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = async (user) => {
    if (user) {
      setUser(user)
    } else {
      dispatch(actions.user.setUser(null))
    }
    if (initializing) setInitializing(false);
  } 


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [])


  const login = useSelector(state => state.user.user);

  return (
    <Stack.Navigator headerMode="none">
      {
        login
          ? <Stack.Screen
            name="AppStack"
            component={Tabs}
          />
          : <Stack.Screen name="CreateStack" component={CreateStack} />
      }
    </Stack.Navigator>
  )
}