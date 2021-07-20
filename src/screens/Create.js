import React, { Component } from 'react';
import { Input, Button } from 'react-native-elements';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Alert
} from 'react-native';
import auth from '@react-native-firebase/auth';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            photoURL: '',
            name: '',
            password: '',
        };
    }

    register = (email, password) => {
        (email != '' && password != '')
            ? auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('Account created');
                    Alert.alert('Account created!')
                    this.props.navigation.navigate('Login');
                })
                .catch(e => {
                    console.log('CreateUser error: ' + e);
                    let errorMessage = e.code;
                    alert(errorMessage);
                })
            : (alert('you must complete the fields'))
    }

    render() {
        const { email, password } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/images/fondo1.jpg')}
                    style={styles.backImage} >

                    <Text style={styles.text}>Create account</Text>

                    <Input style={styles.input}
                        placeholder='email'
                        placeholderTextColor='#b0b0b0'
                        value={email}
                        onChangeText={em => this.setState({ email: em })}
                    />
                    <Input style={styles.input}
                        placeholder="password"
                        placeholderTextColor='#b0b0b0'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={psw => this.setState({ password: psw })}
                    />

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.buttonsContainer}>
                            <Button
                                style={styles.button}
                                title='Register'
                                onPress={() => this.register(email, password)}
                            />
                        </View>

                        <View style={styles.buttonsContainer}>
                            <Button
                                style={styles.button}
                                title='Sign in'
                                onPress={() => this.props.navigation.goBack()}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

export default Create;

const styles = StyleSheet.create({

    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    backImage: {
        height,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
    },
    button: {
        borderRadius: 15,
        justifyContent: 'center',
        zIndex: 1
    },
    buttonsContainer: {
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
    }
})