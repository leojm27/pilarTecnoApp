
import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Alert, Text, View, SafeAreaView, ImageBackground, Dimensions, StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { actions } from '../store/actions';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

GoogleSignin.configure({
    webClientId: '64246561680-evotl16p643v64jq2d7agsp62uvq2eqe.apps.googleusercontent.com', //.apps.googleusercontent.com
});

class Login extends React.Component {

    _loginPress = () => {
        Alert.alert(
            "Login",
            "Este botón aun no tiene funcionalidad",
            [
                { text: "OK", onPress: () => console.log("Login Pressed") }
            ]
        );
    }

    onGoogleButtonPress = async () => {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential)
    }

    _storeData = async (data) => {
        console.log('Signed in with Google!')
        if (data) {
            //console.log('res login: ' + JSON.stringify(data.user))
            try {
                await AsyncStorage.setItem('isloged', JSON.stringify(data.user))
            } catch (e) {
                console.log('Hubo un error :' + e)
            }
            this.props.setUser(data.user)
        }
    }


    render() {
        const { email, photoURL, name, loading, password } = {};
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.content}>
                    <ImageBackground style={styles.backImage} source={require('../assets/images/fondo1.jpg')}>
                        <View>
                            <Text style={styles.text}>Ingresa con tus Redes Sociales</Text>
                        </View>

                        <View style={styles.buttonsContainer}>
                            <Button
                                style={styles.button} title='Continuar con Google...'
                                onPress={() => this.onGoogleButtonPress().then( (data) => {
                                    this._storeData(data);
                                })}
                            />
                        </View>

                        <View style={styles.buttonsContainer}>
                            <Button style={styles.button} title='Continuar con Facebook...' />
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
    /*title: {
        fontSize: 30,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginVertical: 100,
    },*/
    content: {
        flex: 1,
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
        margin: width / 20,
        width: width / 1.5,
        borderRadius: 15,
        justifyContent: 'center',
        backgroundColor: '#fff',
        zIndex: 1
    },
    buttonsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    }


});

const mapDispatchToProps = dispatch => ({
    setUser: (data) =>
        dispatch(actions.user.setUser(data)),
})
const mapStateToProps = state => ({
    user: state.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)((Login))
