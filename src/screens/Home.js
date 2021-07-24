import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const natigator = useNavigation();

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  _onHomePress = () => {
    Alert.alert(
      "Hi!",
      "You are already there",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }



  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          style={{ height }}
          source={require('../assets/images/fondo1.jpg')}
        >
          <View style={{ flexDirection: 'column', height, marginVertical: 100 }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => this._onHomePress()}
                style={[styles.button, { backgroundColor: 'rgba(60, 235, 113, 0.8)' }]}
              >
                <Text style={styles.text}>
                  Home
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Profile')}
                style={[styles.button, { backgroundColor: 'rgba(238, 0, 238, 0.8)' }]}>
                <Text style={styles.text}>
                  Profile
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Posts')}
                style={[styles.button, { backgroundColor: 'rgba(255, 165, 0, 0.8)' }]}>
                <Text style={styles.text}>
                  Posts
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Map')}
                style={[styles.button, { backgroundColor: 'rgba(0, 165, 188, 0.8)' }]}>
                <Text style={styles.text}>
                  Map
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  button: {
    margin: width / 20,
    height: width / 3.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: 1
  }
})