import React, { Component } from 'react';
import { Input, Button } from 'react-native-elements';
import {
    SafeAreaView,
    ScrollView,
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import {  } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
//const image = { uri: 'https://getwallpapers.com/wallpaper/full/9/9/f/267111.jpg' }
//source={require('../assets/images/img15.jpg')}

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
        (email.length != '' && password != '')
            ? (auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('Account created');
                    Alert.alert('Account created!')
                    this.props.navigation.navigate('Login');
                })
                .catch(e => {
                    console.error('CreateUser error: ' + e);
                    let errorMessage = e.code;

                    (errorMessage === 'auth/invalid-email')
                        ? alert('wrong email format')
                        : (errorMessage === 'auth/weak-password')
                            ? alert('weak password, must contain more than 6 characters')
                            : (errorMessage === 'auth/email-already-in-use')
                                ? alert('email already in use')
                                : alert(errorMessage)
                }))
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
        //backgroundColor: '#f0ffff',
    },
    button: {
        //margin: width / 20,
        //width: width / 1.5,
        borderRadius: 15,
        justifyContent: 'center',
        //backgroundColor: '#fff',
        zIndex: 1
    },
    buttonsContainer: {
        alignItems: 'center',
        //justifyContent: 'center',
        paddingVertical: 20,
    }
})