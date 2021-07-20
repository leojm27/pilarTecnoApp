import React, { Component } from 'react';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';
import { connect } from 'react-redux'
import { Avatar, Button } from 'react-native-elements'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { actions } from '../store';

const { height, width } = Dimensions.get('window');
const imageAvatar = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'email',
            photoURL: 'photoURL',
            name: 'name'
        }
    }

    componentDidMount = () => {
        const { user } = this.props
        console.log('user profile: ' + JSON.stringify(user))
        this.setState({
            email: user.providerData[0].email,
            photoURL: user.providerData[0].photoURL,
            name: user.providerData[0].displayName
        })
    }

    _logOutPress = () => {
        Alert.alert(
            "Profile",
            "Do you want to log out?",
            [
                {
                    text: "Yes", onPress: () => {
                        this.signOff();
                    }
                },
                {
                    text: "No", onPress: () => {
                        console.log('_logOutPress Cancel');
                    }
                }
            ]
        );
    }

    signOff = () => {
        auth()
            .signOut()
            .then(async () => {
                console.log('User signed out!');
                this.props.setUser({ user: null });
                try {
                    await AsyncStorage.removeItem('isloged');
                } catch (e) {
                    console.log('removeItem error :' + e);
                }
            }).catch((e) => {
                console.log('signOut error :' + e);

            })
    }


    render() {
        let { email, photoURL, name } = this.state;

        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.content}>
                    <View style={{ alignItems: 'center' }}>
                        {(!photoURL)
                            ? (<Avatar
                                rounded
                                source={{ uri: imageAvatar }}
                                size='xlarge'
                            />)
                            : (<Avatar
                                rounded
                                source={{ uri: photoURL }}
                                size='xlarge'
                            />)}

                        <View style={styles.dataContainer}>
                            <Text style={styles.infoText}>{email}</Text>
                            <Text style={styles.infoText}>{name}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 50, width: width * 0.5 }}>
                    <Button title='Sign off'
                        onPress={() => this._logOutPress() }
                    />
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content: {
        flex: 1,
        marginTop: 60,
        justifyContent: 'center',
    },
    dataContainer: {
        marginTop: 30,
        width
    },
    infoText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'grey'
    }
})
const mapDispatchToProps = dispatch => ({
    setUser: ({ user }) =>
        dispatch(actions.user.setUser({ user })),
})
const mapStateToProps = state => ({
    user: state.user.user
})
export default connect(mapStateToProps, mapDispatchToProps)((Profile))
