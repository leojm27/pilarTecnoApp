import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Create from '../screens/Create';

const CreateStacks = createStackNavigator();

export default CreateStack = (props) => {
    return (
        <CreateStacks.Navigator>
            <CreateStacks.Screen name="Login" component={Login}
                options={{
                    title: 'PilarTecnoApp',
                }}
            />
            <CreateStacks.Screen name="Create" component={Create}
                options={{
                    title: 'Create New Account',
                }} />

        </CreateStacks.Navigator>
    )
}