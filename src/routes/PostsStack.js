import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from '../screens/Posts';
import PostDetail from '../screens/PostDetail';
import PostCreate from '../screens/PostCreate';
import PostEdit from '../screens/PostEdit';

const PostStack = createStackNavigator();

export const PostStackScreen = () => {
    return (
        <PostStack.Navigator>
            <PostStack.Screen name="Posts" component={Posts} />
            <PostStack.Screen name="PostDetail" component={PostDetail} />
            <PostStack.Screen name="PostCreate" component={PostCreate} />
            <PostStack.Screen name="PostEdit" component={PostEdit} />
        </PostStack.Navigator>
    )
}