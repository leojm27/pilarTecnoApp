import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ProfileStackScreen } from './ProfileStack';
import { PostStackScreen } from './PostsStack';
import { MapStackScreen } from './MapStack';
import { HomeStackScreen } from './HomeStack';
import { Icon } from 'react-native-elements';

const Tab = createMaterialBottomTabNavigator();

export const Tabs = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name={'home'}
                            type="font-awesome-5"
                            size={20}
                            color={color}
                        />),
                }}
            />
            <Tab.Screen
                name="Post"
                component={PostStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name={'marker'}
                            type="font-awesome-5"
                            size={20}
                            color={color}
                        />),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name={'user'}
                            type="font-awesome-5"
                            size={20}
                            color={color}
                        />),
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name={'map'}
                            type="font-awesome-5"
                            size={20}
                            color={color}
                        />),
                }}
            />
        </Tab.Navigator>
    );
}