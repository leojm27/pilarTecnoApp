import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import Profile from '../screens/Profile';
import { Map } from '../screens/Map';
import Posts from '../screens/Posts';

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Profile" component={Profile} />
            <HomeStack.Screen name="Posts" component={Posts} />
            <HomeStack.Screen name="Map" component={Map} />
        </HomeStack.Navigator>
    )
}