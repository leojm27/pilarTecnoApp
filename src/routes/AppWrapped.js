import React, { useEffect, useState } from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./AppStack";
import auth from '@react-native-firebase/auth';
import { useDispatch, } from 'react-redux';
import { actions } from '../store';

export const AppWrapped = (props) => {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const dispatch = useDispatch()

    async function onAuthStateChanged(user) {
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
    }, []);

    if (initializing) { return null; }

    return (
        <NavigationContainer >
            <AppStack />
        </NavigationContainer>
    );
}
