
import React from 'react';
import { StyleSheet, Alert, Button, Text, View } from 'react-native';

export const Login = () => {

    _loginPress = () => {
        Alert.alert(
            "Login",
            "Este botón aun no tiene funcionalidad",
            [
                { text: "OK", onPress: () => console.log("Login Pressed") }
            ]
        );
    }

    return (
        <View style={styles.margin}>
            <Text style={styles.title}>Acceso Denegado</Text>
            <Button
                color='black'
                title="Login"
                onPress={() => this._loginPress()} />
        </View>
    );
}


const styles = StyleSheet.create({

    margin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginVertical: 100,
    }

});
