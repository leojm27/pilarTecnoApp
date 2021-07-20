
import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Alert, Text, View, SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { actions } from '../store/actions';
import { Input } from 'react-native-elements/dist/input/Input';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

GoogleSignin.configure({
    webClientId: '64246561680-evotl16p643v64jq2d7agsp62uvq2eqe.apps.googleusercontent.com',
});

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }


    _loginPress = () => {
        Alert.alert(
            "Login",
            "Do you want to log in with your Google account?",
            [
                {
                    text: "Yes", onPress: () => {
                        this.onGoogleButtonPress().then((data) => {
                            this._storeData(data);
                        })
                    }
                },
                {
                    text: "No", onPress: () => console.log('_loginPress Cancel')
                }
            ]
        );
    }

    onGoogleButtonPress = async () => {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential)
    }

    onLoginPasswordUserPress = async () => {
        const { email, password } = this.state;

        (email != '' && password != '')
            ? auth().signInWithEmailAndPassword(email, password)
                .then(async data => {
                    if (data) {
                        //console.log('res login: ' + JSON.stringify(data.user));
                        try {
                            await AsyncStorage.setItem(
                                'isloged',
                                JSON.stringify(data.user),
                            );
                        } catch (e) {
                            console.log('setItem error:' + e);
                        }
                        this.props.setUser(data.user);
                    }
                })
                .catch(e => {
                    console.log('signInWithEmailAndPassword error: ' + e);
                    let errorMessage = e.code;
                    alert(errorMessage);
                })
            : (alert('you must complete the fields'))
    }

    _storeData = async (data) => {
        if (data) {
            try {
                await AsyncStorage.setItem('isloged', JSON.stringify(data.user))
            } catch (e) {
                console.log('setItem error:' + e)
            }
            this.props.setUser(data.user)
        }
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View >
                    <ImageBackground
                        style={styles.backImage}
                        source={require('../assets/images/fondo1.jpg')} >
                        <View>
                            <Text style={styles.text}> Log In </Text>
                        </View>

                        <Input
                            style={styles.input}
                            placeholder='email'
                            placeholderTextColor='#b0b0b0'
                            onChangeText={em => this.setState({ email: em })} />

                        <Input
                            style={styles.input}
                            placeholder="password"
                            placeholderTextColor='#b0b0b0'
                            secureTextEntry={true}
                            onChangeText={psw => this.setState({ password: psw })} />

                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.buttonsContainer}>
                                <View style={{ marginRight: 10 }}>
                                    <Button style={styles.button} title='Sign In'
                                        onPress={() => this.onLoginPasswordUserPress()} />
                                </View>
                            </View>

                            <View style={styles.buttonsContainer}>
                                <View style={{ marginLeft: 10 }}>
                                    <Button style={styles.button} title='Sign Up'
                                        onPress={() => this.props.navigation.navigate('Create')}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={styles.buttonsContainer}>
                            <Button
                                style={styles.button} title='Continue with Google...'
                                onPress={() => this._loginPress()}
                            />
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    margin: {
        marginHorizontal: 20
    },
    input: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
    },
    backImage: {
        height,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
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
    },
});


const mapDispatchToProps = dispatch => ({
    setUser: (data) =>
        dispatch(actions.user.setUser(data)),
})
const mapStateToProps = state => ({
    user: state.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)((Login))
