import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Posts } from '../screens/Posts';
import { Profile } from '../screens/Profile';
import { Map } from '../screens/Map';

const Tab = createStackNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Posts" component={Posts} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Map" component={Map} />
        </Tab.Navigator>
    );
}