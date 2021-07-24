import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from '../screens/Posts';

const PostStack = createStackNavigator();

export const PostStackScreen = () => {
    return (
        <PostStack.Navigator>
            <PostStack.Screen name="Posts" component={Posts} />
        </PostStack.Navigator>
    )
}